import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { AI_CHAT_LIST } from '@/common'
export default function Home() {
  return (
    <>
      <Head>
        <title>AI 资讯</title>
        <meta name="description" content="收集好用可用的 AI 相关的网站吗，工具，方便大家找到适合自己的 AI 工具" />
        <meta name="keywords" content="AI 工具、AI 资讯、GPT 工具"/>
        <meta name="author" content='dashuai' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className='py-4'>
        <h4 className='mb-3'>AI 工具</h4>
        <Row>
          {AI_CHAT_LIST.map(item => {
            return (
              <Col xs={12} md={6} lg={4} xl={3} key={item.id} className='mb-3'>
                <Card>
                  <a href={item.url} target='_blank' className='d-block'>
                    <Image
                      style={{ width: '100%', height: 'auto',borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}
                      className='card-img'
                      src={item.thumb} 
                      alt="" /> 
                  </a>
                  <Card.Body>
                    
                    <Card.Title>
                      <a href={item.url} target='_blank'>{item.name}</a>
                    </Card.Title>

                    <Card.Text className='text-secondary text-truncate-3'>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}

        </Row>
      </Container>
      <footer>
         <Container className='py-3 text-secondary'>
            <p className='text-center fs-14'>浙ICP备2023002029号</p>
            <div className='text-center fs-14'>信息持续收集中，如果大家有好用的 AI 网站欢迎大家去 <a href="https://github.com/shuashuai/dev">Github</a> 上补充</div>
         </Container>
      </footer>
    </>
  )
}
