import mongoose from "mongoose";
import { ProfileTypes } from "../types/types";
import { required } from "joi";

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
      businessTypes: {
         type: [String],
      },
      businessTypesDetails: {
         type: String
      },
      historyAndMission: {
         type: String
      },
      values: {
         type: [String],
      },
      valuesDetails: {
         type: String
      },
      sustainabilityPractices: {
         type: [String],
      },
      sustainabilityDetails: {
         type: String
      },
      agriculturalExpertise: {
         type: [String],
      },
      expertiseDetails: {
         type: String
      }
   },
   contactInformation: {
      location: {
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
      },
      contact: {
         email: {
            type: String,
            required: true
         },
         phone: {
            type: String,
            required: true
         }
      },
      serviceAreas: {
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