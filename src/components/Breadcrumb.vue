<template>
	<nav aria-label="breadcrumb" class="w-full py-4">
		<ol class="flex h-8 space-x-2 dark:text-gray-100">
			<li class="flex items-center">
				<a rel="noopener noreferrer" href="#" title="Back to homepage" class="flex items-center hover:underline">Home</a>
			</li>
			<li class="flex items-center space-x-1">
				<span class="dark:text-gray-600">/</span>
				<a rel="noopener noreferrer" href="#" class="flex items-center px-1 capitalize hover:underline">Parent</a>
			</li>
			<li class="flex items-center space-x-1">
				<span class="dark:text-gray-600">/</span>
				<a rel="noopener noreferrer" href="#" class="flex items-center px-1 capitalize hover:underline">Parent</a>
			</li>
			<li class="flex items-center space-x-1">
				<span class="dark:text-gray-600">/</span>
				<a rel="noopener noreferrer" href="#" class="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
			</li>
		</ol>
	</nav>
</template>