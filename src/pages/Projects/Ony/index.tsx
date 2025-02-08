import { FC } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import Table from '../components/Table';
import NavigationBar from '../../../shared/navigationBar';
import { useBreakpoints } from '../../../utils/use-breackpoints';
import { motion } from 'framer-motion';
import tables from '../../../data/tableOny.json';

// const pageVariants = {
//   initial: { opacity: 0, y: "100%" },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Быстро поднимается
//   exit: { opacity: 0, y: 0, transition: { duration: 0.3 } },
// };

const ShopConstructor: FC = () => {
  const { isDown } = useBreakpoints()

  return (
    <motion.div
      initial="initial" 
      animate="animate" 
      exit="exit" 
      // variants={pageVariants}
    >
      <Header 
        image='Ony/ony-header.webp'
      />

      <main className='work'>
        <Content title='Ony'>
          
        </Content>
        <Image image='Ony/ony-double.webp'/>

        {!isDown('sm') && <Table 
          draggable={true} 
          rows={tables.tableOne.rows} 
          columns={tables.tableOne.columns} 
          firstColumnWidth='40rem' 
          lastColumnWidth='100rem'
        />}
        
        <Image image='Ony/ony-breath.webp'/>
        <Table 
          draggable={false} 
          rows={tables.tableTwo.rows} 
          columns={tables.tableTwo.columns} 
          itemMaxWidth='61.8rem'
        />
        <Image image='Ony/ony-children.webp'/>
        <Table 
          draggable={true} 
          rows={tables.tableThree.rows} 
          columns={tables.tableThree.columns}  
          itemMaxWidth='55.8rem'
        />
        <Image image='Ony/ony-shake.webp'/>
        <NavigationBar />
      </main>
    </motion.div>
  )
}

export default ShopConstructor;


