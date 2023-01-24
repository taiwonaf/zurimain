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
        maxWidth: '480px',
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

    textField: {
        background: 'transparent',
        color: '#1E2122'
    },

    formIcon: {
        borderRadius: '50px',
        overflow: 'hidden'
    }

}));

const ForgotPassword = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.loginPage}>
        <Flex 
            className={classes.formContainer}
            justify="center"
            align="center"
        >
            <div className={classes.formHeader}>
                <div className={classes.formLogo}>
                    <img src={Logo} alt="" />
                    <Text color={'#1E2122'} size={25} weight={900}>ZuriChat</Text>
                </div>
            </div>
            <Paper className={classes.form} radius={0}>
                <Flex
                    justify={'center'}
                    align='center'
                    mb={35}
                    >
                    <Container
                        h={50}
                        w={50}
                        bg='#94C8F3'
                        className={classes.formIcon}
                    ></Container>
                </Flex>
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
                    Forgot Passsword ?
                </Title>
                <Text
                    align='center'
                    mb={30}
                    size={18}
                    weight={400}
                    color='#373B3D'
                >
                    No worries, we’ll send you reset instructions.
                </Text>
                <Container>
                    <TextInput placeholder="name@workemail.com" size="md" mb={20} autoComplete='false' classNames={{ input: classes.textField }} />
                    <Button fullWidth mt="xl" size="md" bg={'#14466F'} mb={25} >
                        Reset Password
                    </Button>
                    <Text align="center" mt="md" color={'#373B3D'} weight={'400'} size={20} mb={25} >
                        <Anchor<'a'> href="#" onClick={(event) => event.preventDefault()}>
                            Back to login
                        </Anchor>
                    </Text>
                </Container>
            </Paper>  
        </Flex>
    </div>
  );
}

export default ForgotPassword