<?php

$username=$_POST['username'];

if ($username=="xiaohaizi")
	// 如果返回的字符串过长，input框将不够用
{echo "该用户名已被占用";}  
else
{echo "该名字可以使用";}	

// 有问号的是独立的，没问号被其他包含
?>