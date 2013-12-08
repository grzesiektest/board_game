package resources;

import java.util.ArrayList;
import java.util.List;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane.MoveAction;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import domain.Move;
import domain.MoveResponse;


@Path("/Game")
public class GameResources {

	@POST
	@Path("/Move")
	@Produces(MediaType.APPLICATION_JSON)
	public MoveResponse move() {
		
		List<Move> moves = new ArrayList<Move>();
	
		Move move_1 = new Move();
		move_1.setId(1);
		move_1.setY(353);
		move_1.setX(336);
		moves.add(move_1);
		
		Move move_2 = new Move();
		move_2.setId(2);
		move_2.setY(334);
		move_2.setX(423);
		moves.add(move_2);
		
		Move move_3 = new Move();
		move_3.setId(3);
		move_3.setY(283);
		move_3.setX(489);
		moves.add(move_3);
		
		Move move_4 = new Move();
		move_4.setId(4);
		move_4.setY(237);
		move_4.setX(560);
		moves.add(move_4);
		
		Move move_5 = new Move();
		move_5.setId(5);
		move_5.setY(177);
		move_5.setX(598);
		moves.add(move_5);
		
		Move move_6 = new Move();
		move_6.setId(6);
		move_6.setY(111);
		move_6.setX(572);
		moves.add(move_6);
		
		MoveResponse moveResponse = new MoveResponse();
		moveResponse.setMoves(moves);
		moveResponse.setContent("My content");
		moveResponse.setTitle("My Title");
		
		return moveResponse;
	}
}
