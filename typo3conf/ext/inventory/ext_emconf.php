<?php

########################################################################
# Extension Manager/Repository config file for ext "inventory".
#
# Auto generated 24-02-2012 04:32
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Inventory List',
	'description' => 'This is just a very basic example for an extension based on Extbase. It was taken from the book "Zukunftssichere TYPO3-Extensions mit Extbase und Fluid".',
	'category' => 'plugin',
	'shy' => 0,
	'version' => '1.0.0',
	'dependencies' => '',
	'conflicts' => '',
	'priority' => '',
	'loadOrder' => '',
	'module' => '',
	'state' => 'stable',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearcacheonload' => 0,
	'lockType' => '',
	'author' => 'Malik Nadeem',
	'author_email' => 'nadeem@phoenix.gosign.de',
	'author_company' => '',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'constraints' => array(
		'depends' => array(
			'php' => '5.2.0-0.0.0',
			'typo3' => '4.3.0-0.0.0',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	'_md5_values_when_last_written' => 'a:9:{s:12:"ext_icon.gif";s:4:"e922";s:17:"ext_localconf.php";s:4:"c7d1";s:14:"ext_tables.php";s:4:"8b07";s:14:"ext_tables.sql";s:4:"a3a1";s:42:"Classes/Controller/InventoryController.php";s:4:"0459";s:32:"Classes/Domain/Model/Product.php";s:4:"7bfb";s:47:"Classes/Domain/Repository/ProductRepository.php";s:4:"ba14";s:47:"Resources/Private/Templates/Inventory/list.html";s:4:"7539";s:34:"Resources/Public/Icons/product.gif";s:4:"905a";}',
);

?>