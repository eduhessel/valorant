import Image from 'next/image'
import styles from 'styles/home.module.scss'

const HomePage = () => (
  <div className={styles.container}>
    <header>
      <div className={styles.container}>
        <Image
          src="/riot-games.svg"
          width={52}
          height={26}
          alt="Logo da riot games"
        />
        <span />

        <Image
          src="/valorant.svg"
          width={32}
          height={26}
          alt="Logo do valorant"
        />

        <nav>nav</nav>

        <div>user</div>
      </div>
    </header>
    <main>main</main>
  </div>
)

export default HomePage
