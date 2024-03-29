<?php

########################################################################
# Extension Manager/Repository config file for ext "about".
#
# Auto generated 25-10-2011 13:10
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Help>About',
	'description' => 'Shows info about TYPO3 and installed extensions.',
	'category' => 'module',
	'shy' => 1,
	'dependencies' => '',
	'conflicts' => '',
	'priority' => '',
	'loadOrder' => '',
	'module' => 'mod',
	'doNotLoadInFE' => 1,
	'state' => 'stable',
	'internal' => 0,
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 0,
	'lockType' => '',
	'author' => 'Kasper Skaarhoj',
	'author_email' => 'kasperYYYY@typo3.com',
	'author_company' => 'Curby Soft Multimedia',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'version' => '1.1.0',
	'_md5_values_when_last_written' => 'a:8:{s:16:"ext_autoload.php";s:4:"5a89";s:12:"ext_icon.gif";s:4:"f3ab";s:14:"ext_tables.php";s:4:"57f3";s:48:"interfaces/interface.tx_about_customsections.php";s:4:"3f4a";s:13:"mod/clear.gif";s:4:"cc11";s:12:"mod/conf.php";s:4:"e02a";s:13:"mod/index.php";s:4:"16b7";s:12:"mod/info.gif";s:4:"2723";}',
	'constraints' => array(
		'depends' => array(
			'php' => '5.3.0-0.0.0',
			'typo3' => '4.6.0-0.0.0',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	'suggests' => array(
	),
);

?>