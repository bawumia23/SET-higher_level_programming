# AI Lab: Pair Programming with AI - Part 2

## Description

This project audits a "legacy" `TaskQueue` class for Single Responsibility
Principle (SRP) violations and a scope/closure bug, using structured AI
prompts, then refactors it into a cleaner implementation.

## Files

| File | Description |
| --- | --- |
| `task_queue_legacy.js` | The original flawed implementation - mixes task validation, state mutation, logging, and scheduling in one method, and has a `notify()` function with a closure/scope trap (closes over the constructor's `name` parameter instead of reading the live `this.queueName`). |
| `task_queue_clean.js` | The refactored implementation - extracts logging into a dedicated `QueueLogger` class and resolves the scope/closure bug by passing `this.queueName` explicitly instead of relying on the stale closure. |

## Process

1. Prompted an AI (Claude) to audit `task_queue_legacy.js`'s `addTask` method for scope/closure issues in the `notify()` function.
2. Prompted the AI to identify SRP violations and refactor the class, extracting logging/scheduling concerns.
3. Implemented the refactor as `task_queue_clean.js`.
4. Prompted the AI a final time to verify the refactor, which confirmed the scope/closure bug was fully resolved but flagged that the SRP fix was partial - validation and the scheduling trigger (`if (tasks.length === 1)`) are still inline inside `addTask` rather than extracted into their own methods, alongside the (now-extracted) logging.

Full prompt text, AI responses, and evidence screenshots are compiled in the
submitted Google Doc.

## Reflection

The lesson's point that "LLMs are pattern-matching engines, not code
executors" became concrete when I asked the AI to audit for structural
problems instead of just "fix the code." A pattern-matcher can readily point
out things like "this variable is captured by a closure" or "this method
does four different jobs" because those are recognizable shapes it has seen
many times - but it can't actually run my code to verify the fix works,
which is why the final verification step caught something I had missed: my
refactor fixed the scope/closure bug completely, but only partially
separated SRP concerns, since validation and the scheduling trigger were
still living inside `addTask` alongside logging. If I had just asked the AI
to "fix the code," I likely would have accepted whatever came back without
noticing that gap myself. Auditing for specific structural categories (SRP,
scope) forced me to actually understand what "correct" meant in each
dimension, rather than just checking whether the output looked plausible.
