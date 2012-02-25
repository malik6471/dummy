<?php
class Tx_Inventory_Controller_InventoryController extends Tx_Extbase_MVC_Controller_ActionController {

	public function listAction() {
		$productRepository = t3lib_div::makeInstance('Tx_Inventory_Domain_Repository_ProductRepository');
		$products = $productRepository->findAll();
		$this->view->assign('products', $products);
	}
	
}
?>