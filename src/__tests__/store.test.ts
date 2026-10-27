import { describe, it, expect, beforeEach } from "vitest";
import { useChaseHorseStore } from "../lib/store";

describe("ChaseHorse Store Operations", () => {
  it("initializes with default tasks and metrics", () => {
    const state = useChaseHorseStore.getState();
    expect(state.tasks.length).toBeGreaterThan(0);
    expect(state.metrics.totalTasks).toBe(124);
    expect(state.metrics.completedTasks).toBe(96);
  });

  it("creates a new task and increments totalTasks metrics", () => {
    const initialCount = useChaseHorseStore.getState().tasks.length;
    const initialTotal = useChaseHorseStore.getState().metrics.totalTasks;

    const newTaskId = useChaseHorseStore.getState().createTask({
      title: "Test Store Audit",
      category: "Store audit",
      description: "Test description for audit",
      businessName: "Test Client Ltd",
      businessId: "biz-test",
      rewardAmount: 400,
      currency: "INR",
      location: {
        lat: 12.97,
        lng: 77.64,
        address: "Test Address, Bengaluru",
        city: "Bengaluru",
      },
      allowedRadiusMeters: 100,
      startDate: new Date().toISOString(),
      deadline: new Date().toISOString(),
      expectedDurationMinutes: 20,
      status: "open",
      workerCount: 1,
      requiredPhotosCount: 2,
      checklist: [{ id: "c1", label: "Check stock", completed: false, required: true }],
      instructions: ["Check in inside geofence"],
    });

    const state = useChaseHorseStore.getState();
    expect(newTaskId.startsWith("CH-")).toBe(true);
    expect(state.tasks.length).toBe(initialCount + 1);
    expect(state.metrics.totalTasks).toBe(initialTotal + 1);
  });

  it("approves a submission, updating task status and completed metric", () => {
    const initialCompleted = useChaseHorseStore.getState().metrics.completedTasks;
    const initialInReview = useChaseHorseStore.getState().metrics.inReviewTasks;

    useChaseHorseStore.getState().approveSubmission("CH-24817", "Ops verified successfully");

    const state = useChaseHorseStore.getState();
    const task = state.tasks.find((t) => t.id === "CH-24817");

    expect(task?.status).toBe("approved");
    expect(task?.latestSubmission?.reviewStatus).toBe("approved");
    expect(state.metrics.completedTasks).toBe(initialCompleted + 1);
    expect(state.metrics.inReviewTasks).toBe(initialInReview - 1);
  });

  it("requests rework on a task with notes", () => {
    useChaseHorseStore.getState().requestRework("CH-24817", "Please re-capture photo of shelf 2");

    const state = useChaseHorseStore.getState();
    const task = state.tasks.find((t) => t.id === "CH-24817");

    expect(task?.status).toBe("rework_requested");
    expect(task?.latestSubmission?.reviewerNotes).toBe("Please re-capture photo of shelf 2");
  });
});

