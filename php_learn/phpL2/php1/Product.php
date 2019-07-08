<?php


class Product
{
    protected $name;
    protected $price;
    protected $description;

    public function product_get_price()
    {

    }

    public function product_get_name()
    {

    }

    public function product_get_description()
    {

    }

    /**
     * @param mixed $description
     */
    public function setDescription($description): void
    {
        $this->description = $description;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @param mixed $price
     */
    public function setPrice($price): void
    {
        $this->price = $price;
    }


}