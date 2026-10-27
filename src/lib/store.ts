import { create } from 'zustand';
import { Task, OperationsMetrics, TaskStatus } from './types';
import { INITIAL_TASKS, INITIAL_METRICS } from './mockData';

interface TaskFilterState {
  status: string;
  category: string;
  searchQuery: string;
  sortBy: 'latest' | 'reward_high' | 'deadline';
}

interface ChaseHorseState {
  tasks: Task[];
  metrics: OperationsMetrics;
  selectedTaskId: string | null;
  filters: TaskFilterState;
  isDemoMode: boolean;
  introCompleted: boolean;
  activeUserRole: 'operations' | 'business' | 'worker';
  
  // Actions
  setIntroCompleted: (completed: boolean) => void;
  setSelectedTaskId: (id: string | null) => void;
  setFilters: (filters: Partial<TaskFilterState>) => void;
  toggleDemoMode: () => void;
  setUserRole: (role: 'operations' | 'business' | 'worker') => void;
  
  // Task Actions
  createTask: (newTask: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => string;
  approveSubmission: (taskId: string, reviewerNotes?: string) => void;
  requestRework: (taskId: string, notes: string) => void;
  submitEvidence: (taskId: string, submissionData?: Partial<Task['latestSubmission']>) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
}

export const useChaseHorseStore = create<ChaseHorseState>((set, get) => ({
  tasks: INITIAL_TASKS,
  metrics: INITIAL_METRICS,
  selectedTaskId: 'CH-24817',
  filters: {
    status: 'all',
    category: 'all',
    searchQuery: '',
    sortBy: 'latest',
  },
  isDemoMode: true,
  introCompleted: false,
  activeUserRole: 'operations',

  setIntroCompleted: (completed) => set({ introCompleted: completed }),

  setSelectedTaskId: (id) => set({ selectedTaskId: id }),

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  toggleDemoMode: () => set((state) => ({ isDemoMode: !state.isDemoMode })),

  setUserRole: (role) => set({ activeUserRole: role }),

  createTask: (taskData) => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newId = `CH-${randomNum}`;
    const now = new Date().toISOString();

    const createdTask: Task = {
      ...taskData,
      id: newId,
      status: 'open',
      createdAt: now,
      updatedAt: now,
    };

    set((state) => ({
      tasks: [createdTask, ...state.tasks],
      metrics: {
        ...state.metrics,
        totalTasks: state.metrics.totalTasks + 1,
        pendingTasks: state.metrics.pendingTasks + 1,
      },
      selectedTaskId: newId,
    }));

    return newId;
  },

  approveSubmission: (taskId, reviewerNotes) => {
    const now = new Date().toISOString();
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          const submission = task.latestSubmission
            ? {
                ...task.latestSubmission,
                reviewStatus: 'approved' as const,
                reviewerNotes: reviewerNotes || 'Approved by Operations Team',
                reviewedAt: now,
                reviewedBy: 'Ops Lead - Indiranagar Hub',
              }
            : undefined;

          return {
            ...task,
            status: 'approved' as const,
            latestSubmission: submission,
            updatedAt: now,
          };
        }
        return task;
      });

      return {
        tasks: updatedTasks,
        metrics: {
          ...state.metrics,
          completedTasks: state.metrics.completedTasks + 1,
          inReviewTasks: Math.max(0, state.metrics.inReviewTasks - 1),
          totalPayouts: state.metrics.totalPayouts + 450,
        },
      };
    });
  },

  requestRework: (taskId, notes) => {
    const now = new Date().toISOString();
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          const submission = task.latestSubmission
            ? {
                ...task.latestSubmission,
                reviewStatus: 'rework' as const,
                reviewerNotes: notes,
                reviewedAt: now,
                reviewedBy: 'Ops Lead - Indiranagar Hub',
              }
            : undefined;

          return {
            ...task,
            status: 'rework_requested' as const,
            latestSubmission: submission,
            updatedAt: now,
          };
        }
        return task;
      });

      return {
        tasks: updatedTasks,
      };
    });
  },

  submitEvidence: (taskId, submissionData = {}) => {
    const now = new Date().toISOString();
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          const updatedSubmission = {
            id: `sub-${taskId}-${Date.now().toString().slice(-4)}`,
            taskId,
            workerId: task.assignedWorker?.id || 'wrk-active',
            workerName: task.assignedWorker?.name || 'Verified Worker',
            workerRating: task.assignedWorker?.rating || 4.8,
            submittedAt: now,
            photos: submissionData?.photos || [],
            checklist: submissionData?.checklist || task.checklist,
            automatedChecks: submissionData?.automatedChecks || {
              radiusMet: true,
              actualDistanceMeters: 24,
              allowedRadiusMeters: task.allowedRadiusMeters,
              inTaskWindow: true,
              timestamp: now,
              noDuplicates: true,
              subjectMatch: true,
              notes: ['Check-in GPS locked at 4m horizontal accuracy'],
            },
            reviewStatus: 'pending' as const,
          };

          return {
            ...task,
            status: 'in_review' as const,
            latestSubmission: updatedSubmission,
            updatedAt: now,
          };
        }
        return task;
      });

      return {
        tasks: updatedTasks,
        metrics: {
          ...state.metrics,
          inReviewTasks: state.metrics.inReviewTasks + 1,
          pendingTasks: Math.max(0, state.metrics.pendingTasks - 1),
        },
      };
    });
  },

  updateTaskStatus: (taskId, status) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status, updatedAt: new Date().toISOString() } : task
      ),
    }));
  },
}));

