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
							</div>
							<!-- end participant -->

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

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Breadcrumb from "@/components/Breadcrumb.vue";
import HeaderAgenda from "@/components/HeaderAgenda.vue";
import Tabs from '@/components/Tabs.vue'
import TabOneContent from '@/components/TabOneContent.vue'
import TabTwoContent from '@/components/TabTwoContent.vue'
import TabThreeContent from '@/components/TabThreeContent.vue'

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
})
</script>