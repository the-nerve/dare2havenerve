import {
    Avatar,
    Box,
    Button,
    IconButton,
    Container,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';

import { OpenInNew, Instagram, Facebook } from '@material-ui/icons';

import { NERVE_WEBSITE, D2D_WEBSITE } from '@/lib/constants';

export const Footer: React.FC = () => {
    return (
        <footer>
            <Divider />
            <Box py={5} id="footer-content">
                <Container maxWidth="md">
                    <Box mb={3} textAlign="center" color="text.secondary">
                        <Typography variant="h6">A creative collaboration between...</Typography>
                    </Box>
                    <Grid container spacing={5} alignItems="stretch" justify="space-between">
                        <Grid item md={6} xs={12}>
                            <Paper>
                                <Card>
                                    <Box border="1px solid" borderColor="secondary.main" borderRadius="inherit">
                                        <CardContent>
                                            <Box mb={3} width={60} height={60} clone>
                                                <Avatar alt="Nerve Theatre Logo" src="/nerve-logo.jpg" />
                                            </Box>
                                            <Typography variant="subtitle1">
                                                <strong>The Nerve</strong>
                                            </Typography>
                                            <Box color="text.disabled">
                                                <Typography variant="caption">EIN: 47-1626207</Typography>
                                            </Box>
                                            <Box color="text.secondary" mt={2}>
                                                <Typography variant="body2">
                                                    The Nerve is a professional, actor-driven theatre focused on telling
                                                    emotionally truthful stories that have a visceral impact on
                                                    audiences.
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton
                                                size="small"
                                                href="https://www.facebook.com/nervetheatre"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Facebook />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                href="https://www.instagram.com/nervetheatre/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Instagram />
                                            </IconButton>
                                            <Button
                                                href={NERVE_WEBSITE}
                                                variant="text"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                size="small"
                                                endIcon={<OpenInNew />}
                                            >
                                                website
                                            </Button>
                                        </CardActions>
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Paper variant="outlined">
                                <Card>
                                    <Box border="1px solid" borderColor="primary.main" borderRadius="inherit">
                                        <CardContent>
                                            <Box mb={3} width={60} height={60} clone>
                                                <Avatar alt="D2D Logo" src="/d2d-logo.jpg" />
                                            </Box>
                                            <Typography variant="subtitle1">
                                                <strong>D2D</strong>
                                            </Typography>
                                            <Box color="text.disabled">
                                                <Typography variant="caption">EIN: 47-2897868</Typography>
                                            </Box>
                                            <Box color="text.secondary" mt={2}>
                                                <Typography variant="body2">
                                                    D2D was created out of the passion of Dayton-based artists, to
                                                    cultivate an environment where local talent can flourish.
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton
                                                size="small"
                                                href="https://www.facebook.com/D2D.theatre/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Facebook />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                href="https://www.instagram.com/dare2defydayton"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Instagram />
                                            </IconButton>
                                            <Button
                                                href={D2D_WEBSITE}
                                                variant="text"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                size="small"
                                                endIcon={<OpenInNew />}
                                            >
                                                website
                                            </Button>
                                        </CardActions>
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider />
            <Paper>
                <Box py={2} id="copyright">
                    <Container maxWidth="md">
                        <Box color="text.disabled" textAlign="center">
                            <Typography variant="caption">
                                Copyright © {new Date().getFullYear()} The Nerve & D2D. All rights reserved.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Paper>
        </footer>
    );
};
