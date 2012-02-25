<?php
$TYPO3_CONF_VARS['SYS']['sitename'] = 'TYPO3 Dummy Version 4.6.4'; // Modified by TYPO3Winstaller

	// Default password is "joh316" :
$TYPO3_CONF_VARS['BE']['installToolPassword'] = 'bacb98acf97e0b6112b1d1b650b84971';

$TYPO3_CONF_VARS['EXT']['extList'] = 'info,perm,func,filelist,about,version,tsconfig_help,context_help,extra_page_cm_options,impexp,sys_note,tstemplate,tstemplate_ceditor,tstemplate_info,tstemplate_objbrowser,tstemplate_analyzer,func_wizards,wizard_crpages,wizard_sortpages,lowlevel,install,belog,beuser,aboutmodules,setup,taskcenter,info_pagetsconfig,viewpage,rtehtmlarea,css_styled_content,t3skin,t3editor,reports,felogin,extbase,fluid,workspaces,linkvalidator,scheduler';

$typo_db_extTableDef_script = 'extTables.php';

## INSTALL SCRIPT EDIT POINT TOKEN - all lines after this points may be changed by the install script!

$TYPO3_CONF_VARS['EXT']['extList'] = 'css_styled_content,extbase,info,perm,func,filelist,about,version,tsconfig_help,context_help,extra_page_cm_options,impexp,sys_note,tstemplate,tstemplate_ceditor,tstemplate_info,tstemplate_objbrowser,tstemplate_analyzer,func_wizards,wizard_crpages,wizard_sortpages,lowlevel,install,belog,beuser,aboutmodules,setup,taskcenter,info_pagetsconfig,viewpage,rtehtmlarea,t3skin,t3editor,reports,felogin,fluid,workspaces,linkvalidator,scheduler,adodb,dbal,cshmanual,feedit,opendocs,simulatestatic,recycler,templavoila,inventory';	// Modified or inserted by TYPO3 Extension Manager. Modified or inserted by TYPO3 Core Update Manager. 
// Updated by TYPO3 Core Update Manager 02-12-10 12:44:01
$TYPO3_CONF_VARS['BE']['disable_exec_function'] = '0';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['gdlib_png'] = '1';	// Modified or inserted by TYPO3 Install Tool. 
$TYPO3_CONF_VARS['GFX']['im'] = '1';	// Modified or inserted by TYPO3 Install Tool. 
$TYPO3_CONF_VARS['GFX']['im_combine_filename'] = '';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['im_path'] = 'D:\\upanels\\typo3 tasks\\projects\\Typo3Installers\\TYPO3Winstaller\\GraphicsMagick\\'; // Modified by TYPO3Winstaller
$TYPO3_CONF_VARS['GFX']['im_path_lzw'] = 'D:\\upanels\\typo3 tasks\\projects\\Typo3Installers\\TYPO3Winstaller\\GraphicsMagick\\'; // Modified by TYPO3Winstaller
$TYPO3_CONF_VARS['GFX']['TTFdpi'] = '96';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['SYS']['encryptionKey'] = 'def76f1d8139304b7edea83b5f40201088ba70b20feabd8b2a647c4e71774b7b0e4086e4039abaf5d4f6a521f922e8a2';	//  Modified or inserted by TYPO3 Install Tool.
// Updated by TYPO3 Install Tool 02-12-10 12:48:05

$typo_db_username = 'root';	//  Modified or inserted by TYPO3 Install Tool.
$typo_db_host = 'localhost:8501'; // Modified by TYPO3Winstaller
$typo_db = 'Dummy'; // Modified by TYPO3Winstaller
$TYPO3_CONF_VARS['BE']['forceCharset'] = 'utf-8';
$TYPO3_CONF_VARS['SYS']['setDBinit'] = 'SET NAMES utf8;';
$TYPO3_CONF_VARS['BE']['fileCreateMask'] = '0664';
$TYPO3_CONF_VARS['BE']['folderCreateMask'] = '2775';
$TYPO3_CONF_VARS['GFX']['jpg_quality'] = '80';  //  Modified or inserted by TYPO3 Install Tool.

// Updated by TYPO3 Install Tool 02-12-10 12:50:01
// Updated by TYPO3 Core Update Manager 02-12-10 12:50:29
$TYPO3_CONF_VARS['SYS']['compat_version'] = '4.6';	// Modified or inserted by TYPO3 Install Tool. 
$TYPO3_CONF_VARS['BE']['versionNumberInFilename'] = '0';	//  Modified or inserted by TYPO3 Install Tool.
$TYPO3_CONF_VARS['GFX']['im_version_5'] = 'gm'; // Modified by TYPO3Winstaller
$TYPO3_CONF_VARS['SYS']['curlUse'] = '1';	//  Modified or inserted by TYPO3 Install Tool.
// Updated by TYPO3 Install Tool 12-05-11 13:33:06
$TYPO3_CONF_VARS['EXT']['extList_FE'] = 'css_styled_content,extbase,version,install,rtehtmlarea,t3skin,felogin,fluid,workspaces,adodb,dbal,feedit,simulatestatic,templavoila,inventory';	// Modified or inserted by TYPO3 Extension Manager. 
$TYPO3_CONF_VARS['EXT']['extConf']['templavoila'] = 'a:1:{s:7:"enable.";a:3:{s:13:"oldPageModule";s:1:"0";s:19:"selectDataStructure";s:1:"0";s:15:"renderFCEHeader";s:1:"0";}}';	//  Modified or inserted by TYPO3 Extension Manager.
// Updated by TYPO3 Extension Manager 25-02-12 12:54:49
?>