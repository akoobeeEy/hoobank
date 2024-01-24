import { features } from "../../constants"
import styles from "../../style"

// eslint-disable-next-line react/prop-types
export const FeatureCard = ({icon,title,content,index}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1} ? "mb-6" : "mb-0" feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-dimWhite text-base leading-[24px] mb-1">{title}</h4>
                <p className="font-normal text-dimWhite text-base leading-[24px]">{content}</p>
            </div>
    </div>
  )
}
