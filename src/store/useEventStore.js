import { defineStore } from "pinia";
import api from "@/services/api";

export const useEventStore = defineStore("event", {
  state: () => ({
	token: localStorage.getItem("token") || null,
	events: [],
	pagination: {
		page: 1,
		perPage: 4,
		total: 0,
	},
	eventDetail: null,
	loading: false,
	status: "LIVE",
  }),
  actions: {
	async login(email, password, accountId) {
		try {
			const res = await api.post("/auth/login", {
			email: import.meta.env.VITE_API_EMAIL,
			password: import.meta.env.VITE_API_PASSWORD,
			account_id: 1,
			});

			this.token = res.data.token;
			localStorage.setItem("token", this.token);

			// DEBUG
			// console.log("Token berhasil diambil:", this.token);

			return this.token;
		} catch (err) {
			console.error("Gagal login:", err.response?.data || err.message);
			throw err;
		}
	},
	async fetchEvents({ page = 1, per_page = 4, status = null } = {}) {
		if (!this.token) {
			await this.login();
		}

		let params = {
			page,
			per_page,
        };

		if (status) {
			params["filter_fields[status][eq]"] = status;
		}
		
		this.loading = true; // start loading
		try {
			const res = await api.get("/events", {
				params: params,
			});
			this.events = res.data.data;
			this.pagination.total = res.data.meta.total;
		} catch (err) {
			console.error("Gagal fetch events:", err);
		} finally {
			this.loading = false; // stop loading
		}
	},
	async fetchEventDetail(id) {
		const res = await api.get(`/events/${id}`);
		this.eventDetail = res.data.data;
	},
	setPage(page) {
		this.pagination.page = page;
	},
	setStatus(status) {
		this.status = status;
		this.pagination.page = 1;
		this.fetchEvents({ status });
    },
  },
});
