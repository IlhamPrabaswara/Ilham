import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#1B1B1F] flex flex-col gap-7 text-[#E4E1E6] px-4 py-[71.5px]">
      <h1 className="font-Raleway text-2xl font-bold">Ilham</h1>
      <p className="text-sm leading-6">
        A front-end enthusiast from Indonesia. I’m interested in React, Node,
        visual design, bikes, photography, and music.
      </p>
      <div className="flex gap-5">
        <Link href="https://linkedin.com/in/ilhamprabaswara">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.7083 4.375C28.4819 4.375 29.2237 4.68229 29.7707 5.22927C30.3177 5.77625 30.625 6.51812 30.625 7.29167V27.7083C30.625 28.4819 30.3177 29.2237 29.7707 29.7707C29.2237 30.3177 28.4819 30.625 27.7083 30.625H7.29167C6.51812 30.625 5.77625 30.3177 5.22927 29.7707C4.68229 29.2237 4.375 28.4819 4.375 27.7083V7.29167C4.375 6.51812 4.68229 5.77625 5.22927 5.22927C5.77625 4.68229 6.51812 4.375 7.29167 4.375H27.7083ZM26.9792 26.9792V19.25C26.9792 17.9891 26.4783 16.7799 25.5867 15.8883C24.6951 14.9967 23.4859 14.4958 22.225 14.4958C20.9854 14.4958 19.5417 15.2542 18.8417 16.3917V14.7729H14.7729V26.9792H18.8417V19.7896C18.8417 18.6667 19.7458 17.7479 20.8688 17.7479C21.4102 17.7479 21.9295 17.963 22.3124 18.3459C22.6953 18.7288 22.9104 19.2481 22.9104 19.7896V26.9792H26.9792ZM10.0333 12.4833C10.6831 12.4833 11.3063 12.2252 11.7657 11.7657C12.2252 11.3063 12.4833 10.6831 12.4833 10.0333C12.4833 8.67708 11.3896 7.56875 10.0333 7.56875C9.37969 7.56875 8.75281 7.82841 8.29061 8.29061C7.82841 8.75281 7.56875 9.37969 7.56875 10.0333C7.56875 11.3896 8.67708 12.4833 10.0333 12.4833ZM12.0604 26.9792V14.7729H8.02083V26.9792H12.0604Z"
              fill="#E4E1E6"
            />
          </svg>
        </Link>
        <Link href="https://github.com/ilhamprabaswara">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4998 2.91663C15.5847 2.91663 13.6884 3.29384 11.919 4.02672C10.1497 4.7596 8.54205 5.8338 7.18786 7.18799C4.45296 9.92289 2.9165 13.6322 2.9165 17.5C2.9165 23.9458 7.10192 29.4145 12.8915 31.3541C13.6207 31.4708 13.854 31.0187 13.854 30.625V28.1604C9.81442 29.0354 8.954 26.2062 8.954 26.2062C8.28317 24.5145 7.33525 24.0625 7.33525 24.0625C6.00817 23.1583 7.43734 23.1875 7.43734 23.1875C8.89567 23.2895 9.66859 24.6895 9.66859 24.6895C10.9373 26.9062 13.0811 26.25 13.9123 25.9C14.0436 24.952 14.4228 24.3104 14.8311 23.9458C11.5936 23.5812 8.19567 22.327 8.19567 16.7708C8.19567 15.152 8.74984 13.8541 9.69775 12.8187C9.55192 12.4541 9.0415 10.9375 9.84359 8.96871C9.84359 8.96871 11.0686 8.57496 13.854 10.4562C15.0061 10.1354 16.2603 9.97496 17.4998 9.97496C18.7394 9.97496 19.9936 10.1354 21.1457 10.4562C23.9311 8.57496 25.1561 8.96871 25.1561 8.96871C25.9582 10.9375 25.4478 12.4541 25.3019 12.8187C26.2498 13.8541 26.804 15.152 26.804 16.7708C26.804 22.3416 23.3915 23.5666 20.1394 23.9312C20.6644 24.3833 21.1457 25.2729 21.1457 26.6291V30.625C21.1457 31.0187 21.379 31.4854 22.1228 31.3541C27.9123 29.4 32.0832 23.9458 32.0832 17.5C32.0832 15.5848 31.706 13.6885 30.9731 11.9192C30.2402 10.1498 29.166 8.54217 27.8118 7.18799C26.4576 5.8338 24.85 4.7596 23.0806 4.02672C21.3113 3.29384 19.4149 2.91663 17.4998 2.91663Z"
              fill="#E4E1E6"
            />
          </svg>
        </Link>
        <Link href="https://instagram.com/ilhamprabaswara">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 10.4898C13.6206 10.4898 10.4898 13.6206 10.4898 17.5C10.4898 21.3794 13.6206 24.5103 17.5 24.5103C21.3794 24.5103 24.5103 21.3794 24.5103 17.5C24.5103 13.6206 21.3794 10.4898 17.5 10.4898ZM17.5 22.0562C14.9913 22.0562 12.9439 20.0088 12.9439 17.5C12.9439 14.9913 14.9913 12.9439 17.5 12.9439C20.0088 12.9439 22.0562 14.9913 22.0562 17.5C22.0562 20.0088 20.0088 22.0562 17.5 22.0562ZM24.7974 8.56889C23.8916 8.56889 23.1602 9.30033 23.1602 10.2061C23.1602 11.1119 23.8916 11.8433 24.7974 11.8433C25.7032 11.8433 26.4346 11.1153 26.4346 10.2061C26.4349 9.99102 26.3927 9.778 26.3105 9.57924C26.2284 9.38049 26.1078 9.19989 25.9557 9.04781C25.8036 8.89573 25.623 8.77514 25.4243 8.69296C25.2255 8.61078 25.0125 8.56862 24.7974 8.56889ZM31.1651 17.5C31.1651 15.6133 31.1822 13.7437 31.0762 11.8604C30.9703 9.67289 30.4712 7.73149 28.8716 6.13188C27.2686 4.52885 25.3306 4.03324 23.1431 3.92729C21.2564 3.82133 19.3868 3.83842 17.5035 3.83842C15.6167 3.83842 13.7471 3.82133 11.8638 3.92729C9.67631 4.03324 7.7349 4.53227 6.13529 6.13188C4.53227 7.7349 4.03666 9.67289 3.9307 11.8604C3.82475 13.7471 3.84184 15.6167 3.84184 17.5C3.84184 19.3833 3.82475 21.2564 3.9307 23.1397C4.03666 25.3272 4.53568 27.2686 6.13529 28.8682C7.73832 30.4712 9.67631 30.9668 11.8638 31.0728C13.7505 31.1787 15.6202 31.1617 17.5035 31.1617C19.3902 31.1617 21.2598 31.1787 23.1431 31.0728C25.3306 30.9668 27.272 30.4678 28.8716 28.8682C30.4747 27.2652 30.9703 25.3272 31.0762 23.1397C31.1856 21.2564 31.1651 19.3868 31.1651 17.5ZM28.1573 25.5596C27.9078 26.1817 27.607 26.6465 27.125 27.125C26.6431 27.607 26.1817 27.9078 25.5596 28.1573C23.7618 28.8716 19.4927 28.711 17.5 28.711C15.5074 28.711 11.2349 28.8716 9.43705 28.1607C8.81498 27.9112 8.35014 27.6104 7.87162 27.1285C7.38969 26.6465 7.08891 26.1851 6.8394 25.563C6.12846 23.7618 6.2891 19.4927 6.2891 17.5C6.2891 15.5074 6.12846 11.2349 6.8394 9.43705C7.08891 8.81498 7.38969 8.35014 7.87162 7.87162C8.35356 7.39311 8.81498 7.08891 9.43705 6.8394C11.2349 6.12846 15.5074 6.2891 17.5 6.2891C19.4927 6.2891 23.7652 6.12846 25.563 6.8394C26.1851 7.08891 26.6499 7.38969 27.1285 7.87162C27.6104 8.35356 27.9112 8.81498 28.1607 9.43705C28.8716 11.2349 28.711 15.5074 28.711 17.5C28.711 19.4927 28.8716 23.7618 28.1573 25.5596Z"
              fill="#E4E1E6"
            />
          </svg>
        </Link>
        <Link href="https://twitter.com/ilhamprabaswara">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.7188 8.69191C30.6729 9.14308 29.5347 9.46779 28.3623 9.59425C29.5795 8.87113 30.491 7.72872 30.9258 6.38136C29.7836 7.06082 28.5324 7.53726 27.2275 7.78956C26.6822 7.20655 26.0226 6.74209 25.2899 6.42514C24.5572 6.10818 23.7671 5.94552 22.9688 5.94728C19.7388 5.94728 17.1411 8.56544 17.1411 11.7783C17.1411 12.2295 17.1958 12.6807 17.2847 13.1148C12.4482 12.8618 8.13477 10.5513 5.26709 7.01369C4.74457 7.90617 4.47075 8.92237 4.47412 9.95656C4.47412 11.98 5.50293 13.7642 7.07178 14.8135C6.14723 14.7771 5.24434 14.523 4.43652 14.0718V14.1436C4.43652 16.9771 6.43945 19.3252 9.10889 19.8652C8.60767 19.9954 8.09207 20.062 7.57422 20.0635C7.19482 20.0635 6.83594 20.0259 6.47363 19.9746C7.21191 22.2852 9.36182 23.9634 11.9219 24.0181C9.91895 25.5869 7.41016 26.5098 4.68604 26.5098C4.19727 26.5098 3.74609 26.4927 3.27783 26.438C5.86182 28.0957 8.92773 29.0527 12.2295 29.0527C22.9482 29.0527 28.8135 20.1729 28.8135 12.4653C28.8135 12.2124 28.8135 11.9595 28.7964 11.7066C29.9312 10.876 30.9258 9.84718 31.7188 8.69191Z"
              fill="#E4E1E6"
            />
          </svg>
        </Link>
        <Link href="https://dribbble.com/ilhamp">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 3.28125C9.65918 3.28125 3.28125 9.65918 3.28125 17.5C3.28125 25.3408 9.65918 31.7188 17.5 31.7188C25.3408 31.7188 31.7188 25.3408 31.7188 17.5C31.7188 9.65918 25.3408 3.28125 17.5 3.28125ZM26.9028 9.83691C28.5947 11.9048 29.6201 14.5366 29.644 17.4043C29.2441 17.3188 25.228 16.5054 21.188 17.0146C21.1025 16.8062 21.0171 16.5977 20.9282 16.3892C20.6753 15.7979 20.4053 15.2065 20.1216 14.6289C24.6094 12.7935 26.6465 10.1855 26.9028 9.83691ZM17.5 5.37305C20.5864 5.37305 23.4062 6.53174 25.5493 8.43213C25.3306 8.74316 23.502 11.2007 19.1851 12.8208C17.1958 9.16357 14.9912 6.1626 14.6528 5.71143C15.5859 5.48584 16.5396 5.37305 17.5 5.37305ZM12.3354 6.52832C12.6567 6.96582 14.8271 9.97705 16.8369 13.5522C11.1563 15.0596 6.15234 15.0391 5.60889 15.0322C6.39844 11.2622 8.93799 8.13135 12.3354 6.52832ZM5.35596 17.5171C5.35596 17.394 5.35937 17.2676 5.36279 17.1445C5.89258 17.1548 11.7783 17.23 17.8452 15.415C18.1938 16.0952 18.5254 16.7856 18.8296 17.4761C18.6689 17.5205 18.5083 17.5684 18.3511 17.6196C12.0859 19.6499 8.75342 25.1699 8.47656 25.6382C6.53857 23.4849 5.35596 20.6377 5.35596 17.5171ZM17.5 29.6611C14.6904 29.6611 12.103 28.7041 10.0454 27.0977C10.2642 26.6499 12.7217 21.9023 19.5713 19.5132L19.6499 19.4858C21.3555 23.9155 22.0596 27.6309 22.2407 28.6973C20.7425 29.3376 19.1293 29.6656 17.5 29.6611ZM24.2847 27.5864C24.1616 26.8481 23.5156 23.2935 21.9263 18.9287C25.7339 18.3203 29.0767 19.3184 29.4902 19.4482C28.9502 22.8252 27.0122 25.7441 24.2847 27.5864Z"
              fill="#E4E1E6"
            />
          </svg>
        </Link>
      </div>
      <p className="text-sm leading-6">© 2022 Ilham. All rights reserved.</p>
    </div>
  );
}
