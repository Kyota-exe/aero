(function() {var implementors = {};
implementors["aero_syscall"] = [{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"aero_syscall/struct.MMapProt.html\" title=\"struct aero_syscall::MMapProt\">MMapProt</a>&gt; for <a class=\"struct\" href=\"aero_syscall/struct.MMapProt.html\" title=\"struct aero_syscall::MMapProt\">MMapProt</a>","synthetic":false,"types":["aero_syscall::MMapProt"]},{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"aero_syscall/struct.MMapFlags.html\" title=\"struct aero_syscall::MMapFlags\">MMapFlags</a>&gt; for <a class=\"struct\" href=\"aero_syscall/struct.MMapFlags.html\" title=\"struct aero_syscall::MMapFlags\">MMapFlags</a>","synthetic":false,"types":["aero_syscall::MMapFlags"]},{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"aero_syscall/struct.OpenFlags.html\" title=\"struct aero_syscall::OpenFlags\">OpenFlags</a>&gt; for <a class=\"struct\" href=\"aero_syscall/struct.OpenFlags.html\" title=\"struct aero_syscall::OpenFlags\">OpenFlags</a>","synthetic":false,"types":["aero_syscall::OpenFlags"]},{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"aero_syscall/struct.TermiosLFlag.html\" title=\"struct aero_syscall::TermiosLFlag\">TermiosLFlag</a>&gt; for <a class=\"struct\" href=\"aero_syscall/struct.TermiosLFlag.html\" title=\"struct aero_syscall::TermiosLFlag\">TermiosLFlag</a>","synthetic":false,"types":["aero_syscall::TermiosLFlag"]},{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"aero_syscall/struct.TermiosCFlag.html\" title=\"struct aero_syscall::TermiosCFlag\">TermiosCFlag</a>&gt; for <a class=\"struct\" href=\"aero_syscall/struct.TermiosCFlag.html\" title=\"struct aero_syscall::TermiosCFlag\">TermiosCFlag</a>","synthetic":false,"types":["aero_syscall::TermiosCFlag"]},{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"aero_syscall/struct.TermiosOFlag.html\" title=\"struct aero_syscall::TermiosOFlag\">TermiosOFlag</a>&gt; for <a class=\"struct\" href=\"aero_syscall/struct.TermiosOFlag.html\" title=\"struct aero_syscall::TermiosOFlag\">TermiosOFlag</a>","synthetic":false,"types":["aero_syscall::TermiosOFlag"]}];
implementors["arrayvec"] = [{"text":"impl&lt;T, const CAP:&nbsp;usize&gt; FromIterator&lt;T&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;T, CAP&gt;","synthetic":false,"types":["arrayvec::arrayvec::ArrayVec"]}];
implementors["cpio_reader"] = [{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"cpio_reader/struct.Mode.html\" title=\"struct cpio_reader::Mode\">Mode</a>&gt; for <a class=\"struct\" href=\"cpio_reader/struct.Mode.html\" title=\"struct cpio_reader::Mode\">Mode</a>","synthetic":false,"types":["cpio_reader::Mode"]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S, A&gt; FromIterator&lt;(K, V)&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Default + Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::HashMap"]},{"text":"impl&lt;T, S, A&gt; FromIterator&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Default + Allocator + Clone,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["serde_json"] = [{"text":"impl FromIterator&lt;(String, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>)&gt; for <a class=\"struct\" href=\"serde_json/struct.Map.html\" title=\"struct serde_json::Map\">Map</a>&lt;String, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;","synthetic":false,"types":["serde_json::map::Map"]},{"text":"impl&lt;T:&nbsp;Into&lt;<a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; FromIterator&lt;T&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl&lt;K:&nbsp;Into&lt;String&gt;, V:&nbsp;Into&lt;<a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;&gt; FromIterator&lt;(K, V)&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]}];
implementors["stivale_boot"] = [{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"stivale_boot/v1/struct.StivaleHeaderFlags.html\" title=\"struct stivale_boot::v1::StivaleHeaderFlags\">StivaleHeaderFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v1/struct.StivaleHeaderFlags.html\" title=\"struct stivale_boot::v1::StivaleHeaderFlags\">StivaleHeaderFlags</a>","synthetic":false,"types":["stivale_boot::v1::StivaleHeaderFlags"]},{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleSmpHeaderTagFlags.html\" title=\"struct stivale_boot::v2::StivaleSmpHeaderTagFlags\">StivaleSmpHeaderTagFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleSmpHeaderTagFlags.html\" title=\"struct stivale_boot::v2::StivaleSmpHeaderTagFlags\">StivaleSmpHeaderTagFlags</a>","synthetic":false,"types":["stivale_boot::v2::header::StivaleSmpHeaderTagFlags"]},{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleFirmwareTagFlags.html\" title=\"struct stivale_boot::v2::StivaleFirmwareTagFlags\">StivaleFirmwareTagFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v2/struct.StivaleFirmwareTagFlags.html\" title=\"struct stivale_boot::v2::StivaleFirmwareTagFlags\">StivaleFirmwareTagFlags</a>","synthetic":false,"types":["stivale_boot::v2::tag::StivaleFirmwareTagFlags"]},{"text":"impl FromIterator&lt;<a class=\"struct\" href=\"stivale_boot/v2/struct.StivalePmrPermissionFlags.html\" title=\"struct stivale_boot::v2::StivalePmrPermissionFlags\">StivalePmrPermissionFlags</a>&gt; for <a class=\"struct\" href=\"stivale_boot/v2/struct.StivalePmrPermissionFlags.html\" title=\"struct stivale_boot::v2::StivalePmrPermissionFlags\">StivalePmrPermissionFlags</a>","synthetic":false,"types":["stivale_boot::v2::tag::StivalePmrPermissionFlags"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()