import React from 'react'
import styles from './Produtos.module.css'
import { Head } from './Head'

export const Produtos = () => {
  return (
    <div className={styles.produtos}>
      <Head title="Ranek | Produtos" description="Entre em contato" />    
      <h1>Produtos</h1>
    </div>
  )
}
