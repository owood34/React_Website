import { useParams } from "react-router-dom";

const ProjectPage = () => {
    const { name } = useParams();

    const filter = `${name}`.toLowerCase().replace(/\s+/g, "");

    const { goal, problems, solutions, reflection } = mapProjectSection(filter);

    return (
        <div>
            <h1> { name } </h1>
            <section>
                <h3> Goal of the Project </h3>
                <p style={{ whiteSpace: "pre-line" }}> { goal } </p>
            </section>
            <section>
                <h3> Problems Faced During Development </h3>
                <p style={{ whiteSpace: "pre-line" }}> { problems } </p>
            </section>
            <section>
                <h3> Developed Solutions </h3>
                <p style={{ whiteSpace: "pre-line" }}> { solutions } </p>
            </section>
            <section>
                <h3> Reflection </h3>
                <p style={{ whiteSpace: "pre-line" }}> { reflection } </p>
            </section>
        </div>
    );
}

function mapProjectSection(keyword) {
    const sections = {
        goal: "",
        problems: "",
        solutions: "",
        reflection: ""
    }

    switch(keyword) {
        case "tictactoegamesinc": {
            
            sections.goal = `The goal is to recreate versions of C that uphold a high quality in terms of apperance, gameplay, speed, and rules. 
            The first version I will talk about is tictactoeV2: 
            1. No global variables. 
            2. Random Player Starts. 
            3. Player 1 X's, Player 2 O's. 
            4. Rules of Tic Tac Toe apply for winning, losing, or cat (tying).

            ----------------------------------------------------------------------------------------------------------------------------

            The second version I will talk about is tictactoe2.
            This verison uses an AI as the second player making the game singleplayer if needed.
            The goals of this project are simple:
            1. Again no global variables.
            2. Adhere to the rules of traditional Tic Tac Toe.
            3. Randomly decided whether AI starts first or Player Starts.
            4. Create an AI that makes a good move.
            With the goals laid out. Let us see what problems lie ahead.`

            sections.problems = `I will start with the problems in tictactoeV2. 
            1. How to calculate a win? Especially when you use characters it is hard to determine what is a winning scenario and what is a losing scenario. 
            Visually it might be easy however calculating for diagonals will prove to be the hardest task.
            2. Making the game visually appealing to viewers of the game would also be challenging. 
            This is all done on the cmd prompt so erasing the screen while also displaying the new screen seems challenging.

            ----------------------------------------------------------------------------------------------------------------------------

            Then with tictactoe2, I had the same issues but you add a whole new layer of complexity:
            1. My goal was to do this without google or any other help.
            This might not sound like a good goal but I wanted to push myself and learn from what I know.
            2. I had to make an AI to competed against a player.`

            sections.solutions = `Starting with tictactoeV2 (the multiplayer version), how do you calculate a win? It was simplier than I thought when I thought of it like this. 
            Imagine tug of war where each player are on either side. The position of the middle of the rope changes from zero to which ever way has an advantage. 
            So from one perspective the advantage bar is negative, where the other side is positive. 
            Essentially Player 1 is positive numbers where Player 2 is negative numbers.
            If we look at a row and see that it adds up to 3 (or the length of the board). Then we know Player 1 has three in a row.
            If we see the reverse, where a row adds up to -3 (or the length of the board). Then we know Player 2 has three in a row.
            Additionally, we know that if it does not add up to 3 or -3 and there are no blank spaces then the row is filled up.
            This logic can be placed into each direction (row, columns, and diagonals).
            
            This is great but isnt our board made of characters? We cannot simply add characters together to get a number. 
            We just need to have a filter that filters X's into + and O's into -.
            
            Okay with these two things in mind we have solved the first problem. How about the second problem, making the game look pretty?
            There were two methods I was thinking of:
            1. Pushing the graphic above the screen.
            2. Clearing the whole screen.
            
            At first I thought that pushing the graphic above the screen could be easier hiding it and potentially later on you would be able to see what moves each player did.
            There are issues with this. Firstly, the screen could shift in size revealing the previous pages while on your turn. 
            Two screen sizes are different therefore I would have to get the screen size everytime and loop through a for loop which seems very inefficient.
            
            The second one could be done. If only I could type clear whenever I moved. Then, I saw that a program can execute commands using the system function.
            system takes a string argument to run a command on the cmd prompt which is exactly what I am looking for.
            So if I clear the screen and built the board whenever someone played anything then it should look clean with no other boardstates around it or above it.
            
            An additional problems were the vertical and horizontal lines. Orginally I thought I could use | and a combination of - or +, however, 
            I saw that there were character codes for horizontal lines (\\033[4m%c|\\033[24m) to create a nice underscore each character that needed it.
            
            ----------------------------------------------------------------------------------------------------------------------------

            Now for tictactoe2, creating AI without google.
            I wanted to challenge myself so I thought about Tic Tac Toe theory. Yes, this sounds a little nonsensical, however, hear me out. 
            What are the best places to go in Tic Tac Toe? :
            1. The Center?
            2. The Corners?
            3. The Middle areas?
            
            Well, the center is a powerful early game decision, and leaves you with the most amount of open spaces potentially (8 spaces).
            The corners come next with a potential for 3 areas around them including the center.
            Lastly, the middle areas. But why are the middle areas so low. They share the same amount of spaces as the corners.
            Good question. See the potential of each area must also be determined. 
            1. The center has a potential for 8 winning lines.
            2. Each corner has the potential for 3 winning lines.
            3. Each middle area has the potential for 2 winning lines.
            
            Therefore the potential of winning is decreased significantly in certain areas therefore we only want to pick the middle sections if:
            1. We are winning.
            2. We are losing and need to block (Which leads to Tying in majority of cases).
            
            So we create a sudo board called options. These are our numeric options for each position and our AI will choose the position with the highest number.
            We initiate everything to -10 because it is a very small number and it will stay -10 if the positions are filled with something.
            We then initiate values if they are open on the other board to another values that is bigger than -10 in this case I put -3.
            
            Then, we calculate the rows on the board to see if there is two in a row (We either need to block or win).
            
            Lets run through an example I had to solve and the Computer is playing o. :
            
            x | x | 
            - + - + -
            x | o | x
            - + - + -
            o | o |  
            
            Any normal person would say that o should go in the bottom right as you would win the game.
            However, with how my AI worked both top right (preventing a win) and bottom right (winning) are the same values and it always picks the first one.
            Therefore my AI at one point always picked to prevent a win in this scenario.
            
            This means that winning should be worth more than preventing or aggressive AI for Tic Tac Toe is a better robot.
            
            Which is why in the code a winning move is worth 2 points while a prevention move is worth 1 point.`

            sections.reflection = `This reflection is mostly going to be aimed towards the tictactoe2 or the one with the AI.
            The AI could be better made using Alpha Beta Pruning in order to find the best move going down multiple branches.
            Alpha Beta Pruning would allow to look ahead into the future looking at potential opponent moves set as well giving the best option every time.
            
            Right now the robot can be tricked if you get all three corners, then you have two choices to win. I bet Alpha Beta pruning would work. 
            However, I do not know how to write the algorithm and a goal was to create an algorithm without google and I succeded even if the AI age might be 6.`
            break;
        }
        default:
            break;
    }

    return sections;
}

export default ProjectPage;