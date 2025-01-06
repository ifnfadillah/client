"use client"
import { BotMessageSquareIcon } from "lucide-react"
import Link from "next/link"
import styles from '@/styles/chatbot-button.module.css'

export default function ChatbotButton() {
  return (
    <div className={styles.buttonWrapper}>
      <Link
        href="/chatbot"
        className={styles.button}
      >
        <BotMessageSquareIcon 
          className="
            w-6 
            h-6 
            text-white 
            transition-transform 
            duration-300"
        />
      </Link>
    </div>
  )
} 