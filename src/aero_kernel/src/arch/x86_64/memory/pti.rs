//! PTI (Page Table Isolation) is a feature that mitigates the Meltdown security
//! vulnerability (affecting mainly Intel's x86 CPUs) and improves kernel hardening against
//! attempts to bypass kernel address space layout randomization.
//!
//! ## Notes
//! * <https://en.wikipedia.org/wiki/Kernel_page-table_isolation>

pub const PTI_STACK_SIZE: usize = 256;

/// The PTI CPU stack stored as a thread local.
#[thread_local]
pub static mut PTI_CPU_STACK: [u8; PTI_STACK_SIZE] = [0; PTI_STACK_SIZE];

#[allow(warnings)]
unsafe fn switch_pti_stack(old: usize, new: usize) {}

#[no_mangle]
pub unsafe extern "C" fn map_pti() {}

#[no_mangle]
pub unsafe extern "C" fn unmap_pti() {}
