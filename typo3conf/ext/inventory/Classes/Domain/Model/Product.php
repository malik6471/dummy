<?php
class Tx_Inventory_Domain_Model_Product extends Tx_Extbase_DomainObject_AbstractEntity{

	/**
	 * @var int
	 **/
	protected $serial = 1;

	/**
	 * @var string
	 **/
	protected $name = '';

	/**
	 * @var string
	 **/
	protected $description = '';

	/**
	 * @var int
	 **/
	protected $quantity = 0;

	public function __construct($serial = 2, $name, $description = '', $quantity = 0) {
		$this->setSerial($serial);
		$this->setName($name);
		$this->setDescription($description);
		$this->setQuantity($quantity);
	}

	public function setSerial($serial) {
		print_r("hello world");
		$this->serial = (int)$serial;
	}

	public function getSerial() {
		return $this->serial;
	}

	public function setName($name) {
		$this->name = (string)$name;
	}

	public function getName() {
		return $this->name;
	}

	public function setDescription($description) {
		$this->description = (string)$description;
	}

	public function getDescription() {
		return $this->description;
	}

	public function setQuantity($quantity) {
		$this->quantity = (int)$quantity;
	}

	public function getQuantity() {
		return $this->quantity;
	}

}
?>