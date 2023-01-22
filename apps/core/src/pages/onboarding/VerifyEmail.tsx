import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Input,
  Title,
  Text,
  Anchor,
  Divider,
  Flex,
  NumberInput,
  Container
} from '@mantine/core';
import Logo from '../../assets/Zurilogo.svg';

const useStyles = createStyles((theme) => ({
    loginPage: {
        height: '100vh',
        background: '#FCF7F1',
    },
    
    wrapper: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
    },

    formContainer: {
        width: '100%',
        height: '100%',
        positon: 'relative',
        padding: '17px',
        paddingTop: '155px'
    },

    formHeader: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        height: '75px',
        borderBottom: '1px solid #F9DBB6',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        paddingLeft: '110px',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingLeft: '17px',
        },
    },

    formLogo: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'start',
        alignItems: 'center',
        
    },

    form: {
        // borderRight: `1px solid ${
        // theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
        // }`,
        maxWidth: '693px',
        width: '100%',
        background: 'transparent',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '480px',
        },
    },

    formImage: {
        width: '40%',
        height: '100%',
        background: '#14466F',
        color: 'white',
        zIndex: 99,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: 'none',
        },
    },

    title: {
        // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: '44px',
        lineHeight: '50px',
        fontWeight: 700,
        color: '#1E2122',
    },

    logo: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        width: 120,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    label: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#373B3D'
    },

    inputField: {
        width: '80px',
        height: '80px',
        background: 'transparent',
        color: 'black',
        textAlign: 'center',
        fontSize: '38px',
        fontWeight: 700,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '40px',
        height: '40px',
        fontSize: '21px',
        },
    }

}));

const VerifyEmail = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.loginPage}>
        <Flex 
            className={classes.formContainer}
            justify="center"
            align="start"
        >
            <div className={classes.formHeader}>
                <div className={classes.formLogo}>
                    <img src={Logo} alt="" />
                    <Text color={'#1E2122'} size={25} weight={900}>ZuriChat</Text>
                </div>
            </div>
            <Paper className={classes.form} radius={0}>
                <Title
                    order={2}
                    className={classes.title}
                    align="center"
                    mt="md"
                    mb={15}
                    size={44}
                    color={'#1E2122'}
                    weight={700}
                >
                    Verify your email address
                </Title>
                <Text
                    align='center'
                    mb={40}
                    size={18}
                    weight={400}
                    color='#373B3D'
                >
                    We’ve sent a 6-character code to{' '}
                    <Text weight={700} display='inline'>
                        name@workemail.com.
                    </Text>
                    {' '}Please enter it below. 
                </Text>
                <Container>
                    <Flex
                        justify='space-between'
                        align={'center'}
                        gap={{base: '5px', sm: '20px'}}
                    >
                        <NumberInput size='sm' classNames={{ input: classes.inputField }} max={2} hideControls></NumberInput>
                        <NumberInput size='sm' classNames={{ input: classes.inputField }} hideControls></NumberInput>
                        <NumberInput size='sm' classNames={{ input: classes.inputField }} hideControls></NumberInput>
                        <Divider my="sm" color={'#888D8F'} w={20} />
                        <NumberInput size='sm' classNames={{ input: classes.inputField }} hideControls></NumberInput>
                        <NumberInput size='sm' classNames={{ input: classes.inputField }} hideControls></NumberInput>
                        <NumberInput size='sm' classNames={{ input: classes.inputField }} hideControls></NumberInput>
                    </Flex>
                    <Text align="right" mt="md" color={'#373B3D'} weight={'400'} size={20} mb={25} >
                        Cant't find the code ?{' '}
                        <Anchor<'a'> href="#" weight={700} color={'#14466F'} onClick={(event) => event.preventDefault()}>
                            Resend the code
                        </Anchor>
                    </Text>
                </Container>
            </Paper>  
        </Flex>
    </div>
  );
}

export default VerifyEmail