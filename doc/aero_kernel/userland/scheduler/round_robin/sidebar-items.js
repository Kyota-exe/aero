initSidebarItems({"fn":[["context_switch_finalize","This function is responsible for releasing all of the locks on the current process and the previous process. These processes are locked by [reschedule] and this function is called after the the context switch is done."],["exit_current_process",""],["reschedule","Yields execution to another process. The task of this function is to get the process which is on the front of the process queue and jump to it. If no process are avaviable for execution then the [IDLE_PROCESS] process is executed."]],"static":[["CURRENT_PROCESS",""],["HELD_LOCKS",""],["IDLE_PROCESS","The kernel idle process is a special kind of process that is run when no processes in the scheduler’s queue are avaliable to execute. The idle process is to be created for each CPU."]],"struct":[["HeldLocks",""],["ProcessQueue","Scheduler queue containing a vector of all of the process of the enqueued processes."],["RoundRobin","Round Robin is the simplest algorithm for a preemptive scheduler. When the system timer fires, the next process in the queue is switched to, and the preempted process is put back into the queue."]]});