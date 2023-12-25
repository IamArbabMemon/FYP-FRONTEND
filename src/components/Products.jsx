import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Paper, Rating, Tooltip, Typography, useMediaQuery, Divider } from '@mui/material';
import img1 from '../assets/Hero_Homepage_Accessories_Family_Q4FY22_VP2-859x540.avif'
import img2 from '../assets/microsoft-surface-500x500.webp'
import img3 from '../assets/c43c33fbadc434d69e14ce0ea87066dd.jpg'
import img4 from '../assets/four.jpg'
import img5 from '../assets/five.webp'
import img6 from '../assets/download_4__1_3.jpg.jpeg'
import img7 from '../assets/airdot.webp'
import img8 from '../assets/s-l400.jpg'
import { Image } from 'react-bootstrap';

import { useProductContext } from '../ProductContext';
import { useNavigate } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCartQuantity, increaseCartQuantity } from '../store/productsSlice';




import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  
 





const Products = () => {
    const [value, setValue] = React.useState(2);
    const [allProducts, setAllProducts] = React.useState([]);
    const [gamingList,setGamingList] = useState([])
    const [laptopList, setlaptopList] = useState([])
    const [pcParts, setpcParts]= useState([])
    const [peripeherals , setPeripherals] = useState([])


    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/products/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setAllProducts(data);

        let productListGamingPc = data.filter(product => product.category === 'Gaming PC');
       let  productListLaptops = data.filter(product => product.category === 'Laptops');
       let productListPcParts = data.filter(product => product.category === 'PC Parts');
        let productListPeripherals = data.filter(product => product.category === 'Peripherals');

        setGamingList(productListGamingPc);
        setlaptopList(productListLaptops)
        setpcParts(productListPcParts);
        setPeripherals(productListPeripherals);

        console.log(`check gamingggg==>`,productListGamingPc);
         


        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []); // Dependency array adjusted if allProducts is needed for re-fetching
    
 

 

      //* logic for apply redux
  const { cartItems } = useSelector(state => state.productCount);
  const dispatch = useDispatch()

    const Navigate = useNavigate()

   
    const isSmallerScreen = useMediaQuery('(max-width:500px)');

    const { setSelectedProduct } = useProductContext();


    const HandlePlaceOrder = (product) => {

        setSelectedProduct(product);
    
        Navigate('/checkout');
    
      }


      const downloadImage = (imageSrc, imageName) => {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        
      };

  return (


    <>
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={isSmallerScreen ? 50 : 100}
    slidesPerView={isSmallerScreen ? 1 : 3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><Image src={img1} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>
    <SwiperSlide><Image src={img2} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>
    <SwiperSlide><Image src={img3} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>
    <SwiperSlide><Image src={img4} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>
    <SwiperSlide><Image src={img5} width={isSmallerScreen ? 300 : 500}></Image></SwiperSlide>

    ...
  </Swiper>



  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>




              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',  
                    height: 270,
                  }}
                >

                  <Image style={{ overflow: 'hidden' }} src={img6}></Image>

                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 270,
                  }}
                >
                  <Image src={img7}></Image>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                  <h1>All Products</h1>
                  <Divider/>
                  <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>GAMING PC</Tab>
      <Tab>LAPTOPS</Tab>
      <Tab>PERIPHERALS</Tab>
      <Tab>PC Parts</Tab>

    </TabList>

    <TabPanel>
       <Grid container spacing={2}>
                {allProducts.map((product) => (
                  <Grid key={product.id} item xs={12} md={4} lg={4}>
                    <Card style={{ marginTop: '1rem' }} sx={{ maxWidth: 380 }}>
                      <CardMedia
                        component="img"
                        alt={product.item}
                        height="300"
                        image={img8} // Assuming the image path is a string
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.item}
                        </Typography>
                        <Typography color='text.secondary' gutterBottom variant="h5" component="div">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </CardContent>
                      <CardActions>

                        <div style={{ display: 'flex', justifyContent:'space-between' }}>
                          <Button variant="contained" size="small" onClick={() => {
                            let item = null;
                            item = {...product, qty: 1};
                            dispatch(addToCart(item));}}>
                            Add Product
                          </Button>
                        
                          <Tooltip title="Download Product">
                           
                              <ArrowDownwardIcon onClick={() => downloadImage(product.image, product.productName)} />
                          
                          </Tooltip>

                        </div>

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
     
     
    </TabPanel>

    <TabPanel>
    <Grid container spacing={3}>
                {gamingList.map((product) => (
                  <Grid key={product.id} item xs={12} md={4} lg={3}>
                    <Card style={{ marginTop: '1rem' }} sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt={product.item}
                        height="300"
                        image={img8} // Assuming the image path is a string
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.item}
                        </Typography>
                        <Typography color='text.secondary' gutterBottom variant="h5" component="div">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </CardContent>
                      <CardActions>

                        <div style={{ display: 'flex', gap: '7rem' }}>
                          <Button variant="contained" size="small" onClick={() => {
                            let item = null;
                            item = {...product, qty: 1};
                            dispatch(addToCart(item));}}>
                            Add Product
                          </Button>
                        
                          <Tooltip title="Download Product">
                           
                              <ArrowDownwardIcon onClick={() => downloadImage(product.image, product.productName)} />
                          
                          </Tooltip>

                        </div>

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
    </TabPanel>

    <TabPanel>
    <Grid container spacing={3}>
                {laptopList.map((product) => (
                  <Grid key={product.id} item xs={12} md={4} lg={3}>
                    <Card style={{ marginTop: '1rem' }} sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt={product.item}
                        height="300"
                        image={img8} // Assuming the image path is a string
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.item}
                        </Typography>
                        <Typography color='text.secondary' gutterBottom variant="h5" component="div">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </CardContent>
                      <CardActions>

                        <div style={{ display: 'flex', gap: '7rem' }}>
                          <Button variant="contained" size="small" onClick={() => {
                            let item = null;
                            item = {...product, quantity: 1};
                            dispatch(addToCart(item));}}>
                            Add Product
                          </Button>
                        
                          <Tooltip title="Download Product">
                           
                              <ArrowDownwardIcon onClick={() => downloadImage(product.image, product.productName)} />
                          
                          </Tooltip>

                        </div>

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
    </TabPanel>

    <TabPanel>
    <Grid container spacing={3}>
                {pcParts.map((product) => (
                  <Grid key={product.id} item xs={12} md={4} lg={3}>
                    <Card style={{ marginTop: '1rem' }} sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt={product.item}
                        height="300"
                        image={img8} // Assuming the image path is a string
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.item}
                        </Typography>
                        <Typography color='text.secondary' gutterBottom variant="h5" component="div">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </CardContent>
                      <CardActions>

                        <div style={{ display: 'flex', gap: '7rem' }}>
                          <Button variant="contained" size="small" onClick={() => {
                            let item = null;
                            item = {...product, qty: 1};
                            dispatch(addToCart(item));}}>
                            Place Order
                          </Button>
                        
                          <Tooltip title="Download Product">
                           
                              <ArrowDownwardIcon onClick={() => downloadImage(product.image, product.productName)} />
                          
                          </Tooltip>

                        </div>

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
    </TabPanel>

    <TabPanel>
    <Grid container spacing={3}>
                {peripeherals.map((product) => (
                  <Grid key={product.id} item xs={12} md={4} lg={3}>
                    <Card style={{ marginTop: '1rem' }} sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt={product.item}
                        height="300"
                        image={img8} // Assuming the image path is a string
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.item}
                        </Typography>
                        <Typography color='text.secondary' gutterBottom variant="h5" component="div">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </CardContent>
                      <CardActions>

                        <div style={{ display: 'flex', gap: '7rem'  }}>
                          <Button variant="contained" size="small" onClick={() => {
                            let item = null;
                            item = {...product, qty: 1};
                            dispatch(addToCart(item));}}>
                            Add Product
                          </Button>
                        
                          <Tooltip title="Download Product">
                           
                              <ArrowDownwardIcon onClick={() => downloadImage(product.image, product.productName)} />
                          
                          </Tooltip>

                        </div>

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
    </TabPanel>

  </Tabs>
       
                </Paper>
              </Grid>

        

             
            </Grid>                        

            <Copyright sx={{ pt: 4 }} />
          </Container>
    
    
    </>

  

  )
}

export default Products