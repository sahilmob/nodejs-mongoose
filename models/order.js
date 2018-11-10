const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	products: [
		{
			product: {
				type: Object,
				requierd: true
			},
			quantity: {
				type: Number,
				requierd: true
			}
		}
	],
	user: {
		name: {
			type: String,
			requierd: true
		},
		userId: {
			type: Schema.Types.ObjectId,
			requierd: true,
			ref: "User"
		}
	}
});

module.exports = mongoose.model("Order", orderSchema);
