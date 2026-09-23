/**
  Separate Logger / Observer module to handle side effects
  and satisfy the Single Responsibility Principle (SRP).
 */
class QueueLogger {
  static logQueueStart(queueName) {
    console.log(`Starting queue ${queueName}.`);
  }

  static checkAndNotifyHighPriority(priority, queueName) {
    if (priority > 9) {
      console.warn(`High priority task added to ${queueName}.`);
    }
  }
}

/**
  Refactored TaskQueue class with single responsibility:
  managing the array of tasks.
 */
class TaskQueue {
  constructor(name) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
  }

  /**
    Adds a task to the queue array.
    No longer handles side-effect logging or auto-triggering processing directly.
   */
  addTask(taskFn, priority) {
    if (!taskFn || typeof taskFn !== 'function') {
      console.error('Task must be a function.');
      return;
    }

    const taskPriority = typeof priority === 'number' ? priority : 0;
    this.tasks.push({ taskFn, priority: taskPriority, timestamp: Date.now() });

    // Notify logger externally using explicit parameters (no closure traps)
    QueueLogger.checkAndNotifyHighPriority(taskPriority, this.queueName);

    // Auto-trigger side effect managed explicitly via helper or external controller
    if (this.tasks.length === 1) {
      QueueLogger.logQueueStart(this.queueName);
      this._startProcessing();
    }
  }

  _startProcessing() {
    this.isProcessing = true;
    // ... logic to process tasks ...
  }
}

module.exports = { TaskQueue, QueueLogger };
