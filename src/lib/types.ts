export type TaskStatus = 'open' | 'assigned' | 'in_progress' | 'submitted' | 'in_review' | 'rework_requested' | 'approved' | 'rejected' | 'completed';

export type TaskCategory = 
  | 'Store audit' 
  | 'Signage check' 
  | 'Inventory count' 
  | 'Shelf audit' 
  | 'Price verification' 
  | 'Asset inspection' 
  | 'Mystery shopper';

export interface LocationCoordinates {
  lat: number;
  lng: number;
  address: string;
  city: string;
  landmark?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
  required: boolean;
  photoRequired?: boolean;
}

export interface AutomatedChecks {
  radiusMet: boolean;
  actualDistanceMeters: number;
  allowedRadiusMeters: number;
  inTaskWindow: boolean;
  timestamp: string;
  noDuplicates: boolean;
  duplicateScore?: number;
  subjectMatch: boolean;
  aiConfidenceScore?: number;
  notes?: string[];
}

export interface EvidencePhoto {
  id: string;
  url: string;
  caption: string;
  timestamp: string;
  lat: number;
  lng: number;
  accuracyMeters: number;
  checklistRefId?: string;
}

export interface TaskSubmission {
  id: string;
  taskId: string;
  workerId: string;
  workerName: string;
  workerAvatar?: string;
  workerRating: number;
  submittedAt: string;
  photos: EvidencePhoto[];
  checklist: ChecklistItem[];
  automatedChecks: AutomatedChecks;
  reviewStatus: 'pending' | 'rework' | 'approved' | 'rejected';
  reviewerNotes?: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

export interface Task {
  id: string; // e.g. "CH-24817"
  title: string;
  category: TaskCategory;
  description: string;
  businessName: string;
  businessId: string;
  rewardAmount: number;
  currency: string;
  location: LocationCoordinates;
  allowedRadiusMeters: number;
  startDate: string;
  deadline: string;
  expectedDurationMinutes: number;
  status: TaskStatus;
  workerCount: number;
  requiredPhotosCount: number;
  checklist: ChecklistItem[];
  instructions: string[];
  assignedWorker?: {
    id: string;
    name: string;
    rating: number;
    phone?: string;
    avatar?: string;
  };
  latestSubmission?: TaskSubmission;
  createdAt: string;
  updatedAt: string;
}

export interface OperationsMetrics {
  totalTasks: number;
  completedTasks: number;
  inReviewTasks: number;
  pendingTasks: number;
  totalTasksChange: number; // percentage
  completedChange: number;
  inReviewChange: number;
  pendingChange: number;
  totalPayouts: number;
  activeWorkers: number;
  verificationAccuracy: number;
}

