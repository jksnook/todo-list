(()=>{"use strict";let t=[];t.push(new class{constructor(t){this.title=t,this.items=[]}}("General")),t[0].items.push(new class{constructor(t,e,n,d){this.title=t,this.dueDate=e,this.priority=n,this.desctription=d}}("Test Item",new Date(2023,9,26),"high","A test Item")),function(t,e){const n=document.createElement("ul");e.forEach((t=>{const e=document.createElement("li");e.textContent=t.title,e.addEventListener("click",(()=>{})),n.appendChild(e)}));const d=document.createElement("li"),c=document.createElement("button");c.type="button",c.textContent="New Project",c.addEventListener("click",(()=>{})),d.appendChild(c),n.appendChild(d),t.appendChild(n)}(document.querySelector("div.sidebar"),t),function(t,e){document.createElement("h2").textContent=e.title;const n=document.createElement("table"),d=document.createElement("thead");d.innerHTML="<th>Title</th><th>Duedate</th><th>Priority</th>",n.appendChild(d);const c=document.createElement("tbody");e.items.forEach((t=>{const e=document.createElement("tr"),n=document.createElement("td");n.textContent=t.title,e.appendChild(n);const d=document.createElement("td");d.textContent=t.dueDate.toDateString(),e.appendChild(d);const o=document.createElement("td");o.textContent=t.priority,e.appendChild(o);const i=document.createElement("td");i.textContent=t.description,e.appendChild(i),c.appendChild(e)})),n.appendChild(c),t.appendChild(n)}(document.querySelector("div.todo"),t[0])})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBTUEsSUFBSUEsRUFBVyxHQUNmQSxFQUFTQyxLQUFLLElDUEMsTUFDYixXQUFBQyxDQUFZQyxHQUNWQyxLQUFLRCxNQUFRQSxFQUNiQyxLQUFLQyxNQUFRLEVBQ2YsR0RHd0IsWUFFMUJMLEVBQVMsR0FBR0ssTUFBTUosS0FBSyxJRVRSLE1BQ2IsV0FBQUMsQ0FBWUMsRUFBT0csRUFBU0MsRUFBVUMsR0FDcENKLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtFLFFBQVVBLEVBQ2ZGLEtBQUtHLFNBQVdBLEVBQ2hCSCxLQUFLSyxhQUFlRCxDQUN0QixHRkc4QixZQUFhLElBQUlFLEtBQUssS0FBTSxFQUFHLElBQUssT0FBUSxnQkdUN0QsU0FBcUJDLEVBQVNYLEdBQzNDLE1BQU1ZLEVBQWNDLFNBQVNDLGNBQWMsTUFDM0NkLEVBQVNlLFNBQVFDLElBQ2YsTUFBTUMsRUFBS0osU0FBU0MsY0FBYyxNQUNsQ0csRUFBR0MsWUFBY0YsRUFBUWIsTUFDekJjLEVBQUdFLGlCQUFpQixTQUFTLFNBRzdCUCxFQUFZUSxZQUFZSCxFQUFHLElBRTdCLE1BQU1JLEVBQVdSLFNBQVNDLGNBQWMsTUFDbENRLEVBQW1CVCxTQUFTQyxjQUFjLFVBQ2hEUSxFQUFpQkMsS0FBTyxTQUN4QkQsRUFBaUJKLFlBQWMsY0FDL0JJLEVBQWlCSCxpQkFBaUIsU0FBUyxTQUczQ0UsRUFBU0QsWUFBWUUsR0FDckJWLEVBQVlRLFlBQVlDLEdBQ3hCVixFQUFRUyxZQUFZUixFQUN0QixDSE5BWSxDQUZnQlgsU0FBU1ksY0FBYyxlQUVsQnpCLEdJZE4sU0FBcUIwQixFQUFTVixHQUN0QkgsU0FBU0MsY0FBYyxNQUMvQkksWUFBY0YsRUFBUWIsTUFDbkMsTUFBTXdCLEVBQVlkLFNBQVNDLGNBQWMsU0FDbkNjLEVBQVFmLFNBQVNDLGNBQWMsU0FDckNjLEVBQU1DLFVBQVksa0RBQ2xCRixFQUFVUCxZQUFZUSxHQUN0QixNQUFNRSxFQUFRakIsU0FBU0MsY0FBYyxTQUNyQ0UsRUFBUVgsTUFBTVUsU0FBUWdCLElBQ3BCLE1BQU1DLEVBQUtuQixTQUFTQyxjQUFjLE1BQzVCWCxFQUFRVSxTQUFTQyxjQUFjLE1BQ3JDWCxFQUFNZSxZQUFjYSxFQUFLNUIsTUFDekI2QixFQUFHWixZQUFZakIsR0FDZixNQUFNRyxFQUFVTyxTQUFTQyxjQUFjLE1BQ3ZDUixFQUFRWSxZQUFjYSxFQUFLekIsUUFBUTJCLGVBQ25DRCxFQUFHWixZQUFZZCxHQUNmLE1BQU1DLEVBQVdNLFNBQVNDLGNBQWMsTUFDeENQLEVBQVNXLFlBQWNhLEVBQUt4QixTQUM1QnlCLEVBQUdaLFlBQVliLEdBQ2YsTUFBTUMsRUFBY0ssU0FBU0MsY0FBYyxNQUMzQ04sRUFBWVUsWUFBY2EsRUFBS3ZCLFlBQy9Cd0IsRUFBR1osWUFBWVosR0FDZnNCLEVBQU1WLFlBQVlZLEVBQUcsSUFFdkJMLEVBQVVQLFlBQVlVLEdBQ3RCSixFQUFRTixZQUFZTyxFQUN0QixDSlBBTyxDQURhckIsU0FBU1ksY0FBYyxZQUNsQnpCLEVBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9hZHNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvYWRwcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBsb2FkU2lkZWJhciBmcm9tIFwiLi9sb2Fkc2lkZWJhclwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IGxvYWRQcm9qZWN0IGZyb20gXCIuL2xvYWRwcm9qZWN0XCI7XG5cbi8vY3JlYXRlIERlZmF1bHQgcHJvamVjdFxubGV0IHByb2plY3RzID0gW107XG5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdHZW5lcmFsJykpO1xuXG5wcm9qZWN0c1swXS5pdGVtcy5wdXNoKG5ldyBUb2RvKCdUZXN0IEl0ZW0nLCBuZXcgRGF0ZSgyMDIzLCA5LCAyNiksICdoaWdoJywgJ0EgdGVzdCBJdGVtJykpO1xuXG4vL2xvYWQgc2lkZWJhclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zaWRlYmFyJyk7XG5cbmxvYWRTaWRlYmFyKHNpZGViYXIsIHByb2plY3RzKTtcblxuLy9sb2FkIGRlZmF1bHQgcHJvamVjdFxuXG5jb25zdCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnRvZG8nKTtcbmxvYWRQcm9qZWN0KHRvZG8sIHByb2plY3RzWzBdKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kZXNjdHJpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTaWRlYmFyKHNpZGViYXIsIHByb2plY3RzKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gbG9hZCB0aGlzIHByb2plY3RcbiAgICB9KVxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG4gIGNvbnN0IGJ1dHRvbmxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgbmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy9icmluZyB1cCBuZXcgcHJvamVjdCBmb3JtXG4gIH0pO1xuICBidXR0b25saS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYnV0dG9ubGkpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUHJvamVjdChlbGVtZW50LCBwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIGNvbnN0IGl0ZW1UYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgdGhlYWQuaW5uZXJIVE1MID0gJzx0aD5UaXRsZTwvdGg+PHRoPkR1ZWRhdGU8L3RoPjx0aD5Qcmlvcml0eTwvdGg+JztcbiAgaXRlbVRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcbiAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICBwcm9qZWN0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGUudG9EYXRlU3RyaW5nKCk7XG4gICAgdHIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gaXRlbS5wcmlvcml0eTtcbiAgICB0ci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICB0ci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xuICB9KVxuICBpdGVtVGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGl0ZW1UYWJsZSk7XG59Il0sIm5hbWVzIjpbInByb2plY3RzIiwicHVzaCIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJ0aGlzIiwiaXRlbXMiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJkZXNjcmlwdGlvbiIsImRlc2N0cmlwdGlvbiIsIkRhdGUiLCJzaWRlYmFyIiwicHJvamVjdExpc3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwicHJvamVjdCIsImxpIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJidXR0b25saSIsIm5ld1Byb2plY3RCdXR0b24iLCJ0eXBlIiwibG9hZFNpZGViYXIiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudCIsIml0ZW1UYWJsZSIsInRoZWFkIiwiaW5uZXJIVE1MIiwidGJvZHkiLCJpdGVtIiwidHIiLCJ0b0RhdGVTdHJpbmciLCJsb2FkUHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=