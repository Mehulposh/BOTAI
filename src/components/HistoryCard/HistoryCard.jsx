import { Stack,Typography } from "@mui/material";
import { format,isEqual,startOfDay,add } from "date-fns";
import ConversationCard from "../ConversationCard/ConverationCard";


function historycard({details}){
    
    const CustomDate = (date) => {
        const today = startOfDay(new Date());

        if(isEqual(today,date)){
            return "Today's Chats";
        }
        else if(isEqual(today,add(date,{days: 1}))){
            return "Yesterdays' Chats";
        }
        else{
            return format(date,'do LLL yyyy');
        }
    };

    
    return (
        <Stack
            spacing={2}
        >
            <Typography
                fontWeight={700}
            >
                {CustomDate(startOfDay(new Date(details.dateTime)))}
            </Typography>

            <Stack
                spacing={2}
            >
                {details.chat.map((item) => {
                    return <ConversationCard details={item} readOnly={true} key={item.id}/> ;
                })}
            </Stack>
        </Stack>
    );

}



export default historycard;