import mongoose from "mongoose";
import { ProfileTypes } from "../types/types";
import { Products } from "../types/types";

export const productSchema = new mongoose.Schema<Products>({
   name: {
      type: String
   },
   description: {
      type: String
   },
   image: {
      type: String
   },
   inStock: {
      type: Boolean
   },
   price: {
      type: String
   },
})

export const profileSchema = new mongoose.Schema<ProfileTypes>({
   pid: {
      type: String,
      unique: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   businessProfile: {
      logo: {
         type: String
      },
      name: {
         type: String,
         required: true
      },
      heroText: {
         type: String,
      },
      heroDescription: {
         type: String
      },
      heroImage: {
         type: String
      },
      keyServices: {
         type: [Object],
      },
      aboutUs: {
         whoWeAre: {
            type: String,
            required: true
         },
         whoWeAreImage: {
            type: String,
            required: true
         },
         whatWeDo: {
            type: String,
            required: true
         },
         whatWeDoImage: {
            type: String,
            required: true
         },
         historyAndMission: {
            type: String,
            required: true
         },
         values: {
            type: String,
            required: true
         },
         valuesImage: {
            type: String,
            required: true
         },
         ourTeam: {
            type: String,
            required: true
         },
         ourTeamImage: {
            type: String,
            required: true
         },
      },
      products: {
         type: [productSchema],
      }
   },
   contactInformation: {
      country: {
         type: String,
         required: true
      },
      region: {
         type: String,
         required: true
      },
      city: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true
      },
      phone: {
         type: String,
         required: true
      },
      serviceAreas: {
         type: [String],
      },
      address: {
         type: [String],
      },
      workingHours: {
         type: [String],
      },
      additionalInfo: {
         type: [String],
      },
   },
   gallery: {
      type: [Object],
   }

}, {
   timestamps: true
})


export const Profile = mongoose.model("Profile", profileSchema)
export const Product = mongoose.model("Product", productSchema)