initSidebarItems({"fn":[["init","This function is responsible for initializing all of the kernel modules. Since currently we cannot read the ext2 root filesystem, we link all of the kernel modules into the kernel itself (this is temporary and modules will be loaded from the filesystem in the future)."],["make_module_init","Inner helper function to make sure the function provided to the [module_init] macro has a valid function signature. This function returns the passed module init function as a const void pointer."]],"struct":[["ModuleInit","Inner helper structure holding the module init function as a void pointer. This struct is required as we cannot directly store a pointer in the static as it needs to implement [Sync]."]]});