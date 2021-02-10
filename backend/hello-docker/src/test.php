<?php

final class Application {

	protected string $greeterFn;

	public function __construct() {
		$this->greeterFn = create_function('', 'echo "I\'m PHP script running in Container!";');
	}

	public function sayHello(): void {
		($this->greeterFn)();
	}

}

(new Application)->sayHello();