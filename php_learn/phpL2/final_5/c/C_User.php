<?php
//
// Конттроллер страницы чтения.
//
include_once('m/M_User.php');

class C_Page extends C_Base
{
	//
	// Конструктор.
	//
    public function action_info() {

        $get_user = new User();
        $user_info = $get_user->get($_SESSION['user_id']);
        $this->title .= '::' . $user_info['name'];
        $this->content = $this->Template('v/u_info.php', array('username' => $user_info['name'], 'userlogin' => $user_info['login']));
    }

    public function action_reg() {

        $this->title .= 'Регистрация';
        $this->content = $this->Template('v/u_reg.php', array());

        if($this->isPost()) {
            $new_user = new User();
            $result = $new_user->newR($_POST['name'], $_POST['login'], $_POST['password']);
            if ($result) {
                $this->content = $this->Template('v/u_reg.php', array('text' => $result));
            } else {
                $this->content = $this->Template('v/u_reg.php', array('text' => $result));
            }
        }
    }

    public function action_login() {
        $this->title .= '::Вход';
        $this->content = $this->Template('v/u_login.php', array());

        if($this->isPost()) {
            $login = new User();
            $result = $login->login($_POST['login'], $_POST['password']);
            if ($result) {
                $this->content = $this->Template('v/u_login.php', array('text' => $result));
            } else {
                $this->content = $this->Template('v/u_login.php', array('text' => $result));
            }
        }
    }

    public function action_logout() {
        $logout = new User();
        $result = $logout->logout();
    }

}
