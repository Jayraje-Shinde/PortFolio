import { useState } from "react";
import axios from "axios";

export function Contactme() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		number: "",
		message: ""
	});
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = {
			"service_id": "service_6rrrf2w",
			"template_id": "template_3h8siao",
			"user_id": "26s8uXdREEGk7BllU",
			"template_params": { ...formData, "time": new Date().toISOString() }
		};
		try {
			const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
		} catch (error) {
			console.error("Error submitting form:", error);
		}
		setFormData({
			name: "",
			email: "",
			number: "",
			message: ""
		});
		event.target.reset();
		alert("Thank you for your message!");
	};

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}
	return (
		<>
			<div className="text-2xl font-bold text-charcoalgrey text-center mb-3">
				Contact
			</div>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col gap-4 items-center">
					<input className="p-3 bg-[transperant] border-4 border-[#112A46] text-[#112A46] w-3xs rounded-2xl" type="text" name="name" onChange={handleChange} placeholder="Name" />
					<input className="p-3 bg-[transperant] border-4 border-[#112A46] text-[#112A46] w-3xs rounded-2xl" type="email" name="email" onChange={handleChange} placeholder="Email" />
					<input className="p-3 bg-[transperant] border-4 border-[#112A46] text-[#112A46] w-3xs rounded-2xl" type="text" name="number" maxLength={10} onChange={handleChange} placeholder="Contact number" />
					<textarea className="p-3 bg-[transperant] border-4 border-[#112A46] text-[#112A46] w-3xs rounded-2xl" name="message" onChange={handleChange} placeholder="Message..."></textarea>
					<button className="bg-teracottabg-1 hover:bg-teracottabg-2 cursor-pointer text-white p-4 w-3xs rounded-2xl" type="submit">Send</button>
				</div>
			</form>

		</>
	)
}