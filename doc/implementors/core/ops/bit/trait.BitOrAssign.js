(function() {var implementors = {};
implementors["aero_kernel"] = [{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/controlregs/struct.Cr3Flags.html\" title=\"struct aero_kernel::arch::x86_64::controlregs::Cr3Flags\">Cr3Flags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/controlregs/struct.Cr3Flags.html\" title=\"struct aero_kernel::arch::x86_64::controlregs::Cr3Flags\">Cr3Flags</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::controlregs::Cr3Flags"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/controlregs/struct.Cr4Flags.html\" title=\"struct aero_kernel::arch::x86_64::controlregs::Cr4Flags\">Cr4Flags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/controlregs/struct.Cr4Flags.html\" title=\"struct aero_kernel::arch::x86_64::controlregs::Cr4Flags\">Cr4Flags</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::controlregs::Cr4Flags"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/gdt/struct.SegmentSelector.html\" title=\"struct aero_kernel::arch::x86_64::gdt::SegmentSelector\">SegmentSelector</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/gdt/struct.SegmentSelector.html\" title=\"struct aero_kernel::arch::x86_64::gdt::SegmentSelector\">SegmentSelector</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::gdt::SegmentSelector"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/gdt/struct.GdtEntryFlags.html\" title=\"struct aero_kernel::arch::x86_64::gdt::GdtEntryFlags\">GdtEntryFlags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/gdt/struct.GdtEntryFlags.html\" title=\"struct aero_kernel::arch::x86_64::gdt::GdtEntryFlags\">GdtEntryFlags</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::gdt::GdtEntryFlags"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/arch/x86_64/interrupts/idt/struct.IDTFlags.html\" title=\"struct aero_kernel::arch::x86_64::interrupts::idt::IDTFlags\">IDTFlags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/arch/x86_64/interrupts/idt/struct.IDTFlags.html\" title=\"struct aero_kernel::arch::x86_64::interrupts::idt::IDTFlags\">IDTFlags</a>","synthetic":false,"types":["aero_kernel::arch::x86_64::interrupts::idt::IDTFlags"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaEnclosureCtrl.html\" title=\"struct aero_kernel::drivers::ahci::HbaEnclosureCtrl\">HbaEnclosureCtrl</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaEnclosureCtrl.html\" title=\"struct aero_kernel::drivers::ahci::HbaEnclosureCtrl\">HbaEnclosureCtrl</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HbaEnclosureCtrl"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaCapabilities2.html\" title=\"struct aero_kernel::drivers::ahci::HbaCapabilities2\">HbaCapabilities2</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaCapabilities2.html\" title=\"struct aero_kernel::drivers::ahci::HbaCapabilities2\">HbaCapabilities2</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HbaCapabilities2"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaBohc.html\" title=\"struct aero_kernel::drivers::ahci::HbaBohc\">HbaBohc</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaBohc.html\" title=\"struct aero_kernel::drivers::ahci::HbaBohc\">HbaBohc</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HbaBohc"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaCapabilities.html\" title=\"struct aero_kernel::drivers::ahci::HbaCapabilities\">HbaCapabilities</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaCapabilities.html\" title=\"struct aero_kernel::drivers::ahci::HbaCapabilities\">HbaCapabilities</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HbaCapabilities"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaHostCont.html\" title=\"struct aero_kernel::drivers::ahci::HbaHostCont\">HbaHostCont</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaHostCont.html\" title=\"struct aero_kernel::drivers::ahci::HbaHostCont\">HbaHostCont</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HbaHostCont"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaPortIS.html\" title=\"struct aero_kernel::drivers::ahci::HbaPortIS\">HbaPortIS</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaPortIS.html\" title=\"struct aero_kernel::drivers::ahci::HbaPortIS\">HbaPortIS</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HbaPortIS"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaPortIE.html\" title=\"struct aero_kernel::drivers::ahci::HbaPortIE\">HbaPortIE</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaPortIE.html\" title=\"struct aero_kernel::drivers::ahci::HbaPortIE\">HbaPortIE</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HbaPortIE"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaPortCmd.html\" title=\"struct aero_kernel::drivers::ahci::HbaPortCmd\">HbaPortCmd</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/ahci/struct.HbaPortCmd.html\" title=\"struct aero_kernel::drivers::ahci::HbaPortCmd\">HbaPortCmd</a>","synthetic":false,"types":["aero_kernel::drivers::ahci::HbaPortCmd"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/mouse/struct.MouseFlags.html\" title=\"struct aero_kernel::drivers::mouse::MouseFlags\">MouseFlags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/mouse/struct.MouseFlags.html\" title=\"struct aero_kernel::drivers::mouse::MouseFlags\">MouseFlags</a>","synthetic":false,"types":["aero_kernel::drivers::mouse::MouseFlags"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/uart_16550/struct.InterruptEnable.html\" title=\"struct aero_kernel::drivers::uart_16550::InterruptEnable\">InterruptEnable</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/uart_16550/struct.InterruptEnable.html\" title=\"struct aero_kernel::drivers::uart_16550::InterruptEnable\">InterruptEnable</a>","synthetic":false,"types":["aero_kernel::drivers::uart_16550::InterruptEnable"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/drivers/uart_16550/struct.LineStatus.html\" title=\"struct aero_kernel::drivers::uart_16550::LineStatus\">LineStatus</a>&gt; for <a class=\"struct\" href=\"aero_kernel/drivers/uart_16550/struct.LineStatus.html\" title=\"struct aero_kernel::drivers::uart_16550::LineStatus\">LineStatus</a>","synthetic":false,"types":["aero_kernel::drivers::uart_16550::LineStatus"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableFlags.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableFlags\">PageTableFlags</a>&gt; for <a class=\"struct\" href=\"aero_kernel/mem/paging/page_table/struct.PageTableFlags.html\" title=\"struct aero_kernel::mem::paging::page_table::PageTableFlags\">PageTableFlags</a>","synthetic":false,"types":["aero_kernel::mem::paging::page_table::PageTableFlags"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"aero_kernel/mem/paging/struct.PageFaultErrorCode.html\" title=\"struct aero_kernel::mem::paging::PageFaultErrorCode\">PageFaultErrorCode</a>&gt; for <a class=\"struct\" href=\"aero_kernel/mem/paging/struct.PageFaultErrorCode.html\" title=\"struct aero_kernel::mem::paging::PageFaultErrorCode\">PageFaultErrorCode</a>","synthetic":false,"types":["aero_kernel::mem::paging::PageFaultErrorCode"]}];
implementors["stivale_boot"] = [{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"stivale_boot/v1/struct.StivaleHeaderFlags.html\" title=\"struct stivale_boot::v1::StivaleHeaderFlags\">StivaleHeaderFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v1/struct.StivaleHeaderFlags.html\" title=\"struct stivale_boot::v1::StivaleHeaderFlags\">StivaleHeaderFlags</a>","synthetic":false,"types":["stivale_boot::v1::StivaleHeaderFlags"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleSmpHeaderTagFlags.html\" title=\"struct stivale_boot::v2::StivaleSmpHeaderTagFlags\">StivaleSmpHeaderTagFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleSmpHeaderTagFlags.html\" title=\"struct stivale_boot::v2::StivaleSmpHeaderTagFlags\">StivaleSmpHeaderTagFlags</a>","synthetic":false,"types":["stivale_boot::v2::header::StivaleSmpHeaderTagFlags"]},{"text":"impl BitOrAssign&lt;<a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleFirmwareTagFlags.html\" title=\"struct stivale_boot::v2::StivaleFirmwareTagFlags\">StivaleFirmwareTagFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleFirmwareTagFlags.html\" title=\"struct stivale_boot::v2::StivaleFirmwareTagFlags\">StivaleFirmwareTagFlags</a>","synthetic":false,"types":["stivale_boot::v2::tag::StivaleFirmwareTagFlags"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()