package pl.inf.app.api;

import io.swagger.annotations.Api;
import org.springframework.hateoas.Link;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.inf.app.api.employee.boundary.EmployeeController;
import pl.inf.app.api.offer.boundary.OfferController;
import pl.inf.app.api.room.boundary.RoomController;

import java.util.Arrays;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.inf.app.api.LinkRelations.GET_ALL_EMPLOYEES;
import static pl.inf.app.api.LinkRelations.GET_ALL_OFFERS;
import static pl.inf.app.api.LinkRelations.GET_ALL_ROOMS;
import static pl.inf.app.api.LinkRelations.GET_MAIN_LINKS;

/**
 * Api for retrieving main endpoints
 */
@Api(tags = {"Main Panel"})
@RestController
@RequestMapping(value = "/api", produces = "application/hal+json")
public class LinksController {
    /**
     * Get main links
     *
     * @return list of links
     */
    @GetMapping
    public ResponseEntity<List<Link>> getLinks() {
        return ResponseEntity.ok(
                Arrays.asList(linkTo(methodOn(EmployeeController.class).getAll()).withRel(GET_ALL_EMPLOYEES.toString()),
                        linkTo(methodOn(RoomController.class).getAll()).withRel(GET_ALL_ROOMS.toString()),
                        linkTo(methodOn(OfferController.class).getAll()).withRel(GET_ALL_OFFERS.toString()),
                        linkTo(methodOn(LinksController.class).getLinks()).withRel(GET_MAIN_LINKS.toString())));
    }
}