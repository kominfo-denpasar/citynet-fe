<!-- blog single -->
<template>
	<section class="integration-single section pt-0">
		<div class="max-w-screen-2xl mx-auto px-4">
			<!-- Blog Article -->
			<div class="max-w-4xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
				<div class="max-w-full mx-auto space-y-8">

					<!-- Breadcrumb -->
					<Breadcrumb :current="post?.title" :category="'Events'" :categoryLink="'/list'" />

					<!-- header agenda -->
					<HeaderAgenda :title="post?.title" :subtitle="post?.title" :total="post?.id" />

					<!-- Content -->
					<div class="space-y-5 md:space-y-8">
						<div class="space-y-3">

							<!-- accordion -->
							<div class="space-y-2">
								<h2 class="text-1xl font-bold md:text-2xl dark:text-white py-4">Program Schedule</h2>
								<!-- Item 1 -->
								<div class="border rounded-lg">
									<button @click="toggle(1)"
										class="flex justify-between items-center w-full px-4 py-3 font-semibold text-left">
										<span>Information Guide</span>
										<font-awesome-icon :icon="openIndex === 1 ? 'minus' : 'plus'" />
									</button>
									<div v-show="openIndex === 1" class="px-4 pb-3 dark:text-gray-400">
										{{ post?.body }}
									</div>
								</div>

								<!-- Item 2 -->
								<div class="border rounded-lg">
									<button @click="toggle(2)"
										class="flex justify-between items-center w-full px-4 py-3 font-semibold text-left">
										<span>Programme</span>
										<font-awesome-icon :icon="openIndex === 2 ? 'minus' : 'plus'" />
									</button>
									<div v-show="openIndex === 2" class="px-4 pb-3 dark:text-gray-400">
										<!-- Card Section -->
										<div class="max-w-5xl px-4 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">
											<!-- Grid -->
											<div class="grid gap-3 sm:gap-6">
												<!-- Card -->
												<a class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
													href="#!">
													<div class="p-4 md:p-5">
														<div class="flex gap-x-5">
															<font-awesome-icon
																class="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200"
																:icon="['fas', 'file-alt']" />

															<div class="grow">
																<h3
																	class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
																	Brochure & FAQ
																</h3>
																<p class="text-sm text-gray-500 dark:text-neutral-500">
																	Find all the information you need about our services
																	and policies in our comprehensive brochure and FAQ
																	section.
																</p>
															</div>
														</div>
													</div>
												</a>
												<!-- End Card -->

												<!-- Card -->
												<a class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
													href="#!">
													<div class="p-4 md:p-5">
														<div class="flex gap-x-5">
															<font-awesome-icon
																class="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200"
																:icon="['fas', 'file-alt']" />

															<div class="grow">
																<h3
																	class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
																	Additional Documents
																</h3>
																<p class="text-sm text-gray-500 dark:text-neutral-500">
																	Access supplementary materials and resources to
																	enhance your understanding and support your needs.
																</p>
															</div>
														</div>
													</div>
												</a>
												<!-- End Card -->

											</div>
											<!-- End Grid -->
										</div>
										<!-- End Card Section -->
									</div>
								</div>
							</div>
							<!-- end accordion -->

<<<<<<< HEAD
							<!-- participants -->
							<div class="space-y-2 py-8">
								<h2 class="text-1xl font-bold md:text-2xl dark:text-white">Participant List</h2>

								<Tabs
									:tabs="[
									{ id: 1, label: 'Internal', icon: 'home', component: TabOneContent },
									{ id: 2, label: 'External', icon: 'cog', component: TabTwoContent },
									{ id: 3, label: 'Participants', icon: 'user', component: TabThreeContent }
									]"
								/>
=======
							<figure>
								<img class="w-full object-cover rounded-xl"
									src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
									alt="Blog Image">
								<figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
									A woman sitting at a table.
								</figcaption>
							</figure>

							<p class="text-lg text-gray-800 dark:text-neutral-200">As we've grown, we've
								seen how Preline has helped companies such as Spotify, Microsoft, Airbnb,
								Facebook, and Intercom bring their designers closer together to create amazing
								things. We've also learned that when the culture of sharing is brought in
								earlier, the better teams adapt and communicate with one another.</p>

							<p class="text-lg text-gray-800 dark:text-neutral-200">That's why we are excited to share
								that we now have a
								<a class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
									href="#">free version of Preline</a>,
								which will allow individual designers, startups and other small teams a chance
								to create a culture of openness early on.
							</p>

							<blockquote class="text-center p-4 sm:px-7">
								<p
									class="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
									To say that switching to Preline has been life-changing is an understatement. My
									business has tripled and I got my life back.
								</p>
								<p class="mt-5 text-gray-800 dark:text-neutral-200">
									Nicole Grazioso
								</p>
							</blockquote>

							<figure>
								<img class="w-full object-cover rounded-xl"
									src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
									alt="Blog Image">
								<figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
									A man and a woman looking at a cell phone.
								</figcaption>
							</figure>

							<div class="space-y-3">
								<h3 class="text-2xl font-semibold dark:text-white">Bringing the culture of sharing to
									everyone</h3>

								<p class="text-lg text-gray-800 dark:text-neutral-200">We know the power of
									sharing is real, and we want to create an opportunity for everyone to try
									Preline and explore how transformative open communication can be. Now you can
									have a team of one or two designers and unlimited spectators (think PMs,
									management, marketing, etc.) share work and explore the design process earlier.</p>
>>>>>>> 44b7eaeddd2be8882e4756e48c2327f2d2c1b2b0
							</div>
							<!-- end participant -->

<<<<<<< HEAD
							<!-- event snap -->
							<div class="space-y-2 py-8">
								<h2 class="text-1xl font-bold md:text-2xl dark:text-white">Event Snapshots</h2>

								<p class="text-lg text-gray-800 dark:text-neutral-200 py-4">That's why we are excited to share that we now have a
									<a
										class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
										href="#">free version of Preline</a>,
									which will allow individual designers, startups and other small teams a chance
									to create a culture of openness early on.</p>


								<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
									
									<a class="group block relative overflow-hidden rounded-lg" href="#">
										<img class="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project">
										<div class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
										<div class="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
											<svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
											<span class="text-xs">View</span>
										</div>
										</div>
									</a>

									<a class="group block relative overflow-hidden rounded-lg" href="#">
										<img class="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project">
										<div class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
										<div class="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
											<svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
											<span class="text-xs">View</span>
										</div>
										</div>
									</a>

									<a class="group block relative overflow-hidden rounded-lg" href="#">
										<img class="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project">
										<div class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
										<div class="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
											<svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
											<span class="text-xs">View</span>
										</div>
										</div>
									</a>

									<a class="group block relative overflow-hidden rounded-lg" href="#">
										<img class="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project">
										<div class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
										<div class="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
											<svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
											<span class="text-xs">View</span>
										</div>
										</div>
									</a>

									<a class="group block relative overflow-hidden rounded-lg" href="#">
										<img class="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project">
										<div class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
										<div class="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
											<svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
											<span class="text-xs">View</span>
										</div>
										</div>
									</a>

									<a class="group block relative overflow-hidden rounded-lg" href="#">
										<img class="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project">
										<div class="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
										<div class="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
											<svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
											<span class="text-xs">View</span>
										</div>
										</div>
									</a>
								</div>
								<!-- End Image Grid -->
							</div>
							<!-- end event snapshots -->

							<div class="space-y-2 py-8">
								<h2 class="text-1xl font-bold md:text-2xl dark:text-white">Section</h2>

								<p class="text-lg text-gray-800 dark:text-neutral-200 py-4">That's why we are excited to share that we now have a
									<a
										class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
										href="#">free version of Preline</a>,
									which will allow individual designers, startups and other small teams a chance
									to create a culture of openness early on.</p>
=======
							<ul
								class="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
								<li class="ps-2">Preline allows us to collaborate in real time and is a really
									great way for leadership on the team to stay up-to-date with what everybody is
									working on,"
									<a class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
										href="#">said</a>
									Stewart Scott-Curran, Intercom's Director of Brand Design.
								</li>
								<li class="ps-2">Preline opened a new way of sharing. It's a persistent way for
									everyone to see and absorb each other's work," said David Scott, Creative
									Director at
									<a class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
										href="#">Eventbrite</a>.
								</li>
							</ul>
>>>>>>> 44b7eaeddd2be8882e4756e48c2327f2d2c1b2b0

								<blockquote class="text-center p-4 sm:px-7">
									<p
										class="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
										To say that switching to Preline has been life-changing is an understatement. My
										business has tripled and I got my life back.
									</p>
									<p class="mt-5 text-gray-800 dark:text-neutral-200">
										Nicole Grazioso
									</p>
								</blockquote>

								<figure>
									<img
										class="w-full object-cover rounded-xl"
										src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
										alt="Blog Image">
										<figcaption
											class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
											A man and a woman looking at a cell phone.
										</figcaption>
								</figure>

								<div class="space-y-3">
									<h3 class="text-2xl font-semibold dark:text-white">Bringing the culture of sharing to everyone</h3>

									<p class="text-lg text-gray-800 dark:text-neutral-200">We know the power of
										sharing is real, and we want to create an opportunity for everyone to try
										Preline and explore how transformative open communication can be. Now you can
										have a team of one or two designers and unlimited spectators (think PMs,
										management, marketing, etc.) share work and explore the design process earlier.</p>
								</div>

								<ul
									class="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
									<li class="ps-2">Preline allows us to collaborate in real time and is a really
										great way for leadership on the team to stay up-to-date with what everybody is
										working on,"
										<a
											class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
											href="#">said</a>
										Stewart Scott-Curran, Intercom's Director of Brand Design.</li>
									<li class="ps-2">Preline opened a new way of sharing. It's a persistent way for
										everyone to see and absorb each other's work," said David Scott, Creative
										Director at
										<a
											class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
											href="#">Eventbrite</a>.</li>
								</ul>

								<p class="text-lg text-gray-800 dark:text-neutral-200">Small teams and
									individual designers need a space where they can watch the design process
									unfold, both for themselves and for the people they work with – no matter if
									it's a fellow designer, product manager, developer or client. Preline allows you
									to invite more people into the process, creating a central place for
									conversation around design. As those teams grow, transparency and collaboration
									becomes integrated in how they communicate and work together.</p>

								<div>
									<a
										class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
										href="#">
										Plan
									</a>
									<a
										class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
										href="#">
										Web development
									</a>
									<a
										class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
										href="#">
										Free
									</a>
									<a
										class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
										href="#">
										Team
									</a>
								</div>

<<<<<<< HEAD
=======
							<div>
								<a class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Plan
								</a>
								<a class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Web development
								</a>
								<a class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Free
								</a>
								<a class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
									href="#">
									Team
								</a>
>>>>>>> 44b7eaeddd2be8882e4756e48c2327f2d2c1b2b0
							</div>
						</div>

					</div>
					<!-- End Content -->
				</div>
			</div>
			<!-- End Blog Article -->
		</div>
	</section>
</template>

<script setup="setup">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Breadcrumb from "@/components/Breadcrumb.vue";
import HeaderAgenda from "@/components/HeaderAgenda.vue";

// --------------------

const openIndex = ref(1) // index accordion yang terbuka

function toggle(index) {
	openIndex.value = openIndex.value === index ? null : index
}

// --------------------

const route = useRoute()
const post = ref(null)
const loading = ref(true)

onMounted(async () => {
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${route.params.id}`
		)
		post.value = await res.json()
	} catch (e) {
		console.error(e)
	} finally {
		loading.value = false
	}
<<<<<<< HEAD

	// --------------------

	const route = useRoute()
	const post = ref(null)
	const loading = ref(true)

	onMounted(async () => {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${route.params.id}`
			)
			post.value = await res.json()
		} catch (e) {
			console.error(e)
		} finally {
			loading.value = false
		}
	})

	// -----------------
	import Tabs from '@/components/Tabs.vue'
	import TabOneContent from '@/components/TabOneContent.vue'
	import TabTwoContent from '@/components/TabTwoContent.vue'
	import TabThreeContent from '@/components/TabThreeContent.vue'


=======
})
>>>>>>> 44b7eaeddd2be8882e4756e48c2327f2d2c1b2b0
</script>