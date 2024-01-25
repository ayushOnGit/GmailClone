import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';





export const  SIDEBAR_DATA = [
    {
    name : 'inbox',
    title : 'Inbox',
    icon : PhotoOutlinedIcon,
    },
    {
        name : 'starred',
        title: 'starred',
        icon: StarBorderPurple500OutlinedIcon,
    },
    {
        name : 'sent',
        title: 'sent',
        icon: SendOutlinedIcon,
    },
    {
        name : 'draft',
        title: 'Drafts',
        icon: InsertDriveFileOutlinedIcon,
    },
    {
        name : 'bin',
        title: 'Bin',
        icon: DeleteOutlinedIcon,
    },
    {
        name : 'allmail',
        title: 'All Mail',
        icon: MailOutlineOutlinedIcon,
    }
]

 