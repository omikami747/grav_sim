set_global_assignment -entity "unnamed" -library "lib_unnamed" -name IP_TOOL_NAME "Qsys"
set_global_assignment -entity "unnamed" -library "lib_unnamed" -name IP_TOOL_VERSION "22.1"
set_global_assignment -entity "unnamed" -library "lib_unnamed" -name IP_TOOL_ENV "Qsys"
set_global_assignment -library "lib_unnamed" -name SPD_FILE [file join $::quartus(sip_path) "../unnamed.spd"]
set_global_assignment -library "lib_unnamed" -name MISC_FILE [file join $::quartus(sip_path) "../../../../../FPGAprojects/sdramtst/unnamed.qsys"]

set_global_assignment -library "lib_unnamed" -name MISC_FILE [file join $::quartus(sip_path) "unnamed.v"]
set_global_assignment -library "lib_unnamed" -name MISC_FILE [file join $::quartus(sip_path) "submodules/unnamed_data_pattern_generator_0.v"]
set_global_assignment -library "lib_unnamed" -name MISC_FILE [file join $::quartus(sip_path) "submodules/altera_avalon_data_pattern_generator.v"]
set_global_assignment -library "lib_unnamed" -name MISC_FILE [file join $::quartus(sip_path) "submodules/altera_reset_controller.v"]
set_global_assignment -library "lib_unnamed" -name MISC_FILE [file join $::quartus(sip_path) "submodules/altera_reset_synchronizer.v"]
