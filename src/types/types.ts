
import { Model, Document } from "mongoose"

export type UserRegisterTypes = {
  email: string,
  password: string,
  businessName: string
}

export type UserLoginTypes = {
  email: string
  password: string,
}

export type ProfileTypes = {
  pid: string,
  user: any,
  businessProfile: {
    logo: string,
    name: string
    businessTypes: string[]
    businessTypesDetails: string
    historyAndMission: string,
    values: string[],
    valuesDetails: string,
    sustainabilityPractices: string[],
    sustainabilityDetails: string,
    agriculturalExpertise: string[],
    expertiseDetails: string,
  },
  contactInformation: {
    location: {
      country: string,
      region: string
      city: string,
      address: string,
    },
    contact: {
      email: string,
      phone: string[],
    }
    serviceAreas: string[],
  },
  gallery: any[],
}