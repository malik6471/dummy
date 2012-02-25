<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

Tx_Extbase_Utility_Extension::registerPlugin($_EXTKEY, 'List', 'The Inventory List');

$TCA['tx_inventory_domain_model_product'] = array (
	'ctrl' => array (
		'title' => 'Enter leadger products',
		'label' => 'name',
		'iconfile' => t3lib_extMgm::extRelPath($_EXTKEY) . 'Resources/Public/Icons/product.gif'
	),
	'columns' => array(
		'serial_no' => array(
			'label' => 'serial',
			'config' => array(
				'type' => 'input',
				'size' => '4',
				'eval' => 'int'
			)
		),
		'name' => array(
			'label' => 'name',
			'config' => array(
				'type' => 'input',
				'eval' => 'trim,required'
			)
		),
		'description' => array(
			'label' => 'description',
			'config' => array(
				'type' => 'text',
				'eval' => 'trim'
			)
		),
		'quantity' => array(
			'label' => 'quantity',
			'config' => array(
				'type' => 'input',
				'size' => '4',
				'eval' => 'int'
			)
		),
	),
	'types' => array(
		'0' => array('showitem' => 'serial_no, name, description, quantity')
	)
);

?>