package bd.gov.forms.resource;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import bd.gov.forms.api.Data;
import bd.gov.forms.dao.FormDao;

@Component
@Path("/rest/{formName}/{trackId}")
public class ResourceController {

	@Autowired
	private FormDao formDao;
	
	@GET
	@Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
	public List<Data> getEntryData(
			@PathParam("formName") final String formName,
			@PathParam("trackId") final String trackId) {
		Data dummy1 = new Data();
		dummy1.setName("dummy1");
		dummy1.setValue("value1");
		return Arrays.asList(dummy1);
	}

}
