import {LuCircuitBoard} from 'react-icons/lu'
import {PiBooksLight} from 'react-icons/pi'
import {GiClothes, GiGardeningShears, GiHealthPotion} from 'react-icons/gi'
import {GrGamepad} from 'react-icons/gr'
import {MdForest, MdSportsFootball, MdToys} from 'react-icons/md'
import {IoCarSportSharp} from 'react-icons/io5'

export const categories = [
  {
    label: "Electronic",
    icon: LuCircuitBoard,
    description: 'This product is an electronic.'
  },
  {
    label: 'Books',
    icon: PiBooksLight,
    description: 'This product is a book.'
  },
  {
    label: 'Clothing, Shoes & Jewelry',
    icon: GiClothes,
    description: 'This product is something you can wear!'
  },
  {
    label: 'Movies, Music & Games',
    icon: GrGamepad,
    description: 'This product is very entertaining!'
  },
  {
    label: 'Home, Garden & Tools',
    icon: GiGardeningShears,
    description: 'This product is for your home or garden!'
  },
  {
    label: 'Beauty & Health',
    icon: GiHealthPotion,
    description: 'This product is for your health or beauty!'
  },
  {
    label: 'Toys, Kids & Baby',
    icon: MdToys,
    description: 'This product is for your health or beauty!'
  },
  {
    label: 'Sports',
    icon: MdSportsFootball,
    description: 'This product is for your sport need!'
  },
  {
    label: 'Outdoors',
    icon: MdForest,
    description: 'This product is for your outdoor adventures!'
  },
  {
    label: 'Automotive & Industrial',
    icon: IoCarSportSharp,
    description: 'This product is for your health or beauty!'
  },
]