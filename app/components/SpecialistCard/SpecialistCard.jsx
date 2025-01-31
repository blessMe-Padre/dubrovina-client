import Image from 'next/image';
import Link from "next/link";
import styles from './styles.module.css';

export default function SpecialistCard({ href, img, name, specialty }) {

  return (
    <div className={styles.item}>
      <Link href={href}>
        <div className={styles.item_image}>
          <Image
            src={img}
            alt="specialist_1"
            width={466}
            height={342}
            className={`dsv-image`}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
          />
        </div>
        <div className={styles.item_content}>
          <div className={styles.item_inner}>
            <h3 className={styles.item_title}>{name}</h3>
            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.9007 26.289L26.5784 8.61133" stroke="#27272A" strokeWidth="2" />
              <path d="M10.6826 8.55835H27.7992" stroke="#27272A" strokeWidth="2" />
              <path d="M26.7861 24.6619V7.54529" stroke="#27272A" strokeWidth="2" />
            </svg>
          </div>
          <div className="border_left_div"></div>
          <p className={styles.prof}>{specialty}</p>
        </div>
      </Link>
    </div>
  )
}