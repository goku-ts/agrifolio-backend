
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

export type Products = {
  name: string
  description: string,
  image: string,
  inStock: boolean,
  price: string
}

export type Values = {
  id: string
  title: string,
  content: string,
}

export type ProfileTypes = {
  pid: string,
  user: any,
  businessProfile: {
    logo: string,
    name: string
    heroText: string
    heroDescription: string
    heroImage: string
    keyServices: []
    aboutUs: {
      whoWeAre: string
      whoWeAreImage: string
      whatWeDo: string
      whatWeDoImage: string
      historyAndMission: string
      values: string
      valuesImage: string
      ourTeam: string
      ourTeamImage: string
    },
    products: Products[]
  },
  contactInformation: {
    country: string,
    region: string
    city: string,
    address: string,
    email: string,
    phone: string[],
    serviceAreas: string[],
    workingHours: string,
    additionalInfo: string
  },
  gallery: any[],
}