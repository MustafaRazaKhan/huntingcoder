import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <div>
        <h1>Hunting Coder</h1>
        <h3>A hunting coder by a coder</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odit.</p>
        <button>Let Get Started</button>
        </div>
        <div>
        <Image src="/hero.avif" alt="logo" width={700} height={300} priority="lazyLoading" />
        </div>
      </div>
      <div>
        <h2 className="text-center">Latest Blogs</h2>
      </div>
    
     <div className={styles.blogs}>
      <div className={styles.blog}>
        <h2>javascript Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis recusandae blanditiis alias architecto accusamus nobis enim quos, amet exercitationem pariatur tempore ex!</p>
        <div>
        <button>Read More</button>
      </div>
      </div>
      <div className={styles.blog}>
        <h2>javascript Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis recusandae blanditiis alias architecto accusamus nobis enim quos, amet exercitationem pariatur tempore ex!</p>
        <div>
        <button>Read More</button>
      </div>
      </div>
      <div className={styles.blog}>
        <h2>javascript Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis recusandae blanditiis alias architecto accusamus nobis enim quos, amet exercitationem pariatur tempore ex!</p>
        <div>
        <button>Read More</button>
      </div>
      </div>

     </div>
    </div>
  );
}
