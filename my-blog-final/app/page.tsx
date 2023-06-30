import Posts from "./components/Posts"
import MyProfilePic from './components/myProfilePic'


export const revalidate = 89400

export default function Home() {
  return (
    <div className="mx-auto">
    <MyProfilePic />
    <p className="mt-12 mb-12 text-4xl text-center font-bold italic dark:text-white">
    🤯🤓😎Lusheisteys Lusanity Lunatic Blog🥵🤨🧐
    </p>
  
    <Posts />
    </div>
  )
}
