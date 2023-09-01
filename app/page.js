"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { GlobalContext } from './context/context'
import Link from 'next/link'
import { useContext } from 'react'

export default function Home() {
  const { name, setName} = useContext(GlobalContext);
  return (
    <main className={styles.main}>
      {/* login page */}
      <div>
        <form>

          <label htmlFor="name">Enter Name</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
          <div>
            {name}
          </div>
          <div className={styles.navContainer}> 
          <Link href="dashboard">dashboard</Link>
          </div>
          
        </form>
      </div>
    </main>
  )
}
